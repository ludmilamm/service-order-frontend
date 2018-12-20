import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { endpoint } from '../utils/endpoint';
import { SpinnerService } from '../shared/spinner/spinner.service';
import { ServiceOrderResponse } from '../models/service-order.model';
import { ErrorHandlerService } from '../utils/error-handler.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ServiceOrderListService {
    private url: string;
    private serviceOrdersSubject: Subject<ServiceOrderResponse>;
    serviceOrders: Observable<ServiceOrderResponse>;

    constructor(private httpClient: HttpClient,
                private spinnerService: SpinnerService,
                private errorHandlerService: ErrorHandlerService) {
        this.serviceOrdersSubject = new Subject();
        this.serviceOrders = this.serviceOrdersSubject.asObservable();
    }

    getServiceOrders(collectionPoint: number, patientName: string = '') {
        this.spinnerService.blockUI();
        this.url = endpoint.serviceOrders + '?collection_point=' + collectionPoint + '&patient=' + patientName;
        return this.getServiceOrdersByUrl(this.url);
    }

    getServiceOrdersByPage(page: number = 0) {
        this.spinnerService.blockUI();
        const pageUrl = this.url + '&page=' + page;
        return this.getServiceOrdersByUrl(pageUrl);
    }

    private getServiceOrdersByUrl(url: string) {
        return this.httpClient.get<ServiceOrderResponse>(url)
            .pipe(
                finalize(() => this.spinnerService.unblockUI()),
                catchError<ServiceOrderResponse, never>((error) => this.errorHandlerService.handleError(error))
            ).subscribe((data) => this.serviceOrdersSubject.next(data));
    }

    putStatusExam(id: number, body: any) {
        this.spinnerService.blockUI();
        const url = endpoint.serviceOrderExam + id + '/';
        return this.httpClient.put(url, body)
            .pipe(
                finalize(() => this.spinnerService.unblockUI()),
                catchError((error) => this.errorHandlerService.handleError(error))
            );
    }
}

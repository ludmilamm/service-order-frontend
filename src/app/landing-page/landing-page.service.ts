import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { endpoint } from '../utils/endpoint';

import { SpinnerService } from '../shared/spinner/spinner.service';
import { CollectionPointResponse } from '../models/collection-point.model';
import { ErrorHandlerService } from '../utils/error-handler.service';

@Injectable()
export class LandingPageService {
    constructor(private httpClient: HttpClient,
                private spinnerService: SpinnerService,
                private errorHandlerService: ErrorHandlerService) { }

    getCollectionPoints() {
        this.spinnerService.blockUI();
        return this.httpClient.get<CollectionPointResponse>(endpoint.collectionPoints)
            .pipe(
                finalize(() => this.spinnerService.unblockUI()),
                catchError<CollectionPointResponse, never>((error) => this.errorHandlerService.handleError(error))
            );
    }
}

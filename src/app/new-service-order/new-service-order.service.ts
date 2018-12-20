import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PatientResponse } from '../models/patient.model';
import { endpoint } from '../utils/endpoint';
import { DoctorResponse } from '../models/doctor.model';
import { HealthInsuranceResponse } from '../models/health-insurance.model';
import { ExamResponse } from '../models/exam.model';
import { ServiceOrderResponse } from '../models/service-order.model';
import { ErrorHandlerService } from '../utils/error-handler.service';

@Injectable()
export class NewServiceOrderService {
    constructor(private httpClient: HttpClient, private errorHandlerService: ErrorHandlerService) { }

    getPatients() {
        return this.httpClient.get<PatientResponse>(endpoint.patients)
            .pipe(catchError<PatientResponse, never>((error) => this.errorHandlerService.handleError(error)));
    }

    getDoctors() {
        return this.httpClient.get<DoctorResponse>(endpoint.doctors)
            .pipe(catchError<DoctorResponse, never>((error) => this.errorHandlerService.handleError(error)));
    }

    getHealthInsurances() {
        return this.httpClient.get<HealthInsuranceResponse>(endpoint.healthInsurances)
            .pipe(catchError<HealthInsuranceResponse, never>((error) => this.errorHandlerService.handleError(error)));
    }

    getExams() {
        return this.httpClient.get<ExamResponse>(endpoint.exams)
            .pipe(catchError<ExamResponse, never>((error) => this.errorHandlerService.handleError(error)));
    }

    postServiceOrder(body: any) {
        return this.httpClient.post<ServiceOrderResponse>(endpoint.serviceOrderCreate, body)
            .pipe(catchError<ServiceOrderResponse, never>((error) => this.errorHandlerService.handleError(error)));
    }
}

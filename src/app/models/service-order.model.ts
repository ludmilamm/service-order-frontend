import { CollectionPoint } from './collection-point.model';
import { Paginated } from './paginated.model';
import { Patient } from './patient.model';
import { HealthInsurance } from './health-insurance.model';
import { Doctor } from './doctor.model';
import { Exam } from './exam.model';

export interface ServiceOrderResponse extends Paginated<ServiceOrder> {
}

interface ServiceOrder {
    id: number;
    date: string;
    patient: Patient;
    healthInsurance: HealthInsurance;
    collectionPoint: CollectionPoint;
    doctor: Doctor;
    exams: ServiceOrderExam[];
}

interface ServiceOrderExam {
    id: number;
    exam: Exam;
    resultDate: string;
    price: number;
    status: string;
}

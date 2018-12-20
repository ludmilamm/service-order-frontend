import { Paginated } from './paginated.model';

export interface DoctorResponse extends Paginated<Doctor> {
}

export interface Doctor {
    id: number;
    date: string;
    specialty: {
        id: number;
        description: string;
    };
}

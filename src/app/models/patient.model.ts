import { Neighborhood } from './neighborhood.model';
import { Paginated } from './paginated.model';

export interface PatientResponse extends Paginated<Patient> {
}

export interface Patient {
    id: number;
    name: string;
    birthdate: string;
    gender: string;
    neighborhood: Neighborhood;
}

import { Paginated } from './paginated.model';

export interface HealthInsuranceResponse extends Paginated<HealthInsurance> {
}

export interface HealthInsurance {
    id: number;
    description: string;
}

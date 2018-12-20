import { Paginated } from './paginated.model';
import { Neighborhood } from './neighborhood.model';

export interface CollectionPointResponse extends Paginated<CollectionPoint> {
}

export interface CollectionPoint {
    id: number;
    description: string;
    address: string;
    neighborhood: Neighborhood;
}

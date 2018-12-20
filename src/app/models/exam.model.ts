import { Paginated } from './paginated.model';

export interface ExamResponse extends Paginated<Exam> {
}

export interface Exam {
    id: number;
    description: string;
    biologicalMaterial: string;
    deadline: number;
    sector: {
        id: number;
        description: string;
    };
}

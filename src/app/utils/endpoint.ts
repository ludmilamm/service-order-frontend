import { environment } from '../../environments/environment';

const baseURL = environment.base_url;
export const endpoint = {
    collectionPoints: baseURL + '/collectionpoints/',
    serviceOrders: baseURL + '/serviceorders/',
    patients: baseURL + '/patients/',
    doctors: baseURL + '/doctors/',
    healthInsurances: baseURL + '/healthinsurances/',
    exams: baseURL + '/exams/',
    serviceOrderCreate: baseURL + '/serviceordercreate/',
    serviceOrderExam: baseURL + '/serviceorderexam/'
};


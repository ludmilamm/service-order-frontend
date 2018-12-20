import { Injectable, ErrorHandler } from '@angular/core';

import { ModalService } from '../shared/modal/modal.service';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

    private messagesModal = [];

    constructor(private modalService: ModalService) {}

    handleError(error: any): any {
        if (error.status !== undefined) {
            switch (error.status) {
                case 0:
                    this.messagesModal.push('Atenção');
                    this.messagesModal.push('Verifique sua conexão!');
                    this.messagesModal.push('');
                    this.messagesModal.push('Ok');
                    this.modalService.showModal(this.messagesModal, () => {});
                    break;
                default:
                    this.showUnexpectedError();
                    break;
            }
        } else {
            this.showUnexpectedError();
        }

        return throwError(error);
    }

    private showUnexpectedError() {
        this.messagesModal.push('Atenção');
        this.messagesModal.push('Ocorreu um erro no servidor. Por favor, tente novamente.');
        this.messagesModal.push('');
        this.messagesModal.push('Ok');
        this.modalService.showModal(this.messagesModal, () => {});
    }
}


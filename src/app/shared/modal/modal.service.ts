import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    emitModalEventSubject: Subject<string[]>;
    emitModalConfirmEventSubject: Subject<any>;

    constructor() {
        this.emitModalEventSubject = new Subject<string[]>();
        this.emitModalConfirmEventSubject = new Subject<any>();
    }

    showModal(labels: string[], callback: any) {
        this.emitModalEventSubject.next(labels);
        this.emitModalConfirmEventSubject.next(callback);
    }
}

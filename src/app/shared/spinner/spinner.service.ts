import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    emitBlockUIEvent = new EventEmitter<string>();

    constructor() { }

    blockUI() {
        this.emitBlockUIEvent.emit('block');
    }

    unblockUI() {
        this.emitBlockUIEvent.emit('unblock');
    }
}

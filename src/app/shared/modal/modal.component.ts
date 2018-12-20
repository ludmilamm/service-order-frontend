import { Component, OnInit } from '@angular/core';

import { ModalService } from './modal.service';

declare var jQuery: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title: string;
  content: string;
  leftButton: string;
  rightButton: string;
  callback: any;

  constructor(private modalService: ModalService) {
    jQuery('#genericModal').modal();
  }

  ngOnInit() {
    this.modalService.emitModalEventSubject
      .subscribe(
        (labels) => {
          if (labels.length > 0) {
            this.title = labels[0];
            this.content = labels[1];
            this.leftButton = labels[2];
            this.rightButton = labels[3];
            this.showModal();
          }
        }
      );

    this.modalService.emitModalConfirmEventSubject
      .subscribe(
        (callback) => {
          this.callback = callback;
        }
      );

  }

  showModal() {
    jQuery('#genericModal').modal('show');
  }

  customCallback() {
    if (this.callback instanceof Function) {
        this.callback();
    }
  }
}

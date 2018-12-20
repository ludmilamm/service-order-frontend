import { Component, OnInit } from '@angular/core';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  loading: boolean;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.emitBlockUIEvent.subscribe((event) => {
      switch (event) {
        case 'block':
          this.loading = true;
          break;
        case 'unblock':
          this.loading = false;
          break;
      }
    });
  }

}

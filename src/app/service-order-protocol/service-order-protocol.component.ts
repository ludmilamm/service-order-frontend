import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-order-protocol',
  templateUrl: './service-order-protocol.component.html',
  styleUrls: ['./service-order-protocol.component.scss']
})
export class ServiceOrderProtocolComponent implements OnInit, AfterViewInit {
  serviceOrder: any;
  isPaid: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.serviceOrder = JSON.parse(sessionStorage.getItem('serviceOrder'));
    sessionStorage.clear();
    if (!this.serviceOrder) {
      this.router.navigate(['/']);
    }

    this.isPaid = this.serviceOrder.healthInsurance.description === 'Particular';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      print();
    }, 2200);
  }

  print() {
    window.print();
  }

  exit() {
    this.router.navigate(['/so/home']);
  }
}

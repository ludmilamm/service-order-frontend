import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOrderListService } from './service-order-list.service';

@Component({
  selector: 'app-service-order-list',
  templateUrl: './service-order-list.component.html',
  styleUrls: ['./service-order-list.component.scss'],
  providers: [ServiceOrderListService]
})
export class ServiceOrderListComponent implements OnInit {
  collectionPointId: number;
  serviceOrders: any[];
  searchPatient: string;
  pages: number;
  nextPage: string;

  constructor(private serviceOrderListService: ServiceOrderListService, private router: Router) { }

  ngOnInit() {
    this.collectionPointId = JSON.parse(localStorage.getItem('collectionPoint')).id;
    this.getServiceOrders();
  }

  getServiceOrders() {
    this.serviceOrderListService.getServiceOrders(this.collectionPointId, this.searchPatient);
    this.serviceOrderListService.serviceOrders.subscribe((data) => {
        this.serviceOrders = data.results;
        this.pages = data.pages;
        this.nextPage = data.next;
      });
  }

  onEnterSearchField(event: any) {
    if (event.keyCode === 13) {
      this.getServiceOrders();
    }
  }

  onAddClick() {
    this.router.navigate(['/so/new']);
  }

  onNextPageClick(event) {
    this.serviceOrderListService.getServiceOrdersByPage(event.page);
  }

  onStatusUpdateClick(exam: any) {
    let status;
    switch (exam.status) {
      case 'waiting':
        status = 'processing';
        break;
      case 'processing':
        status = 'available';
        break;
      case 'available':
        status = 'taken';
        break;
    }

    if (status) {
      const body = {
        status: status
      };
      this.serviceOrderListService.putStatusExam(exam.id, body).subscribe(() => exam.status = status);
    }
  }
}

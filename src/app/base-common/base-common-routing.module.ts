import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseCommonComponent } from './base-common.component';
import { ServiceOrderListComponent } from '../service-order-list/service-order-list.component';
import { NewServiceOrderComponent } from '../new-service-order/new-service-order.component';
import { ServiceOrderProtocolComponent } from '../service-order-protocol/service-order-protocol.component';

const routes: Routes = [
  { path: '',
    component: BaseCommonComponent,
    children: [
      { path: 'home', component: ServiceOrderListComponent },
      { path: 'new', component: NewServiceOrderComponent },
      { path: 'protocol', component: ServiceOrderProtocolComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseCommonRoutingModule { }

export const routedComponents = [BaseCommonComponent];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BaseCommonRoutingModule } from './base-common-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BaseCommonComponent } from './base-common.component';
import { ServiceOrderListComponent } from '../service-order-list/service-order-list.component';
import { NewServiceOrderComponent } from '../new-service-order/new-service-order.component';
import { ServiceOrderProtocolComponent } from '../service-order-protocol/service-order-protocol.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BaseCommonRoutingModule,
        SharedModule,
        MatCardModule,
        MatExpansionModule,
        MatSelectModule,
        MatTabsModule,
        MatCheckboxModule
    ],
    exports: [],
    declarations: [
        BaseCommonComponent,
        ServiceOrderListComponent,
        NewServiceOrderComponent,
        ServiceOrderProtocolComponent
    ],
    providers: [],
})
export class BaseCommonModule { }

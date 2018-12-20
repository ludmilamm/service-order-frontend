import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LandingPageRoutingModule,
        SharedModule,
        MatCardModule,
        MatSelectModule
    ],
    exports: [],
    declarations: [LandingPageComponent],
    providers: [],
})
export class LandingPageModule { }

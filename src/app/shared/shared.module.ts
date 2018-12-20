import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilsModule } from '../utils/utils.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UtilsModule
    ],
    exports: [
        PaginatorComponent,
        SpinnerComponent,
        ModalComponent
    ],
    declarations: [
        PaginatorComponent,
        SpinnerComponent,
        ModalComponent
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                SpinnerService,
                ModalService
            ]
        };
    }
}

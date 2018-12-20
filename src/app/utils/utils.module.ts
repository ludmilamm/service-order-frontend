import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { NumberToArrayPipe } from './pipes/number-to-array.pipe';
import { AuthGuard } from './auth.guard';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
    imports: [
        MatDialogModule
    ],
    exports: [
        NumberToArrayPipe
    ],
    declarations: [
        NumberToArrayPipe
    ],
    providers: [
        AuthGuard,
        ErrorHandlerService
    ],
})
export class UtilsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
  { path: 'so', loadChildren: './base-common/base-common.module#BaseCommonModule', canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

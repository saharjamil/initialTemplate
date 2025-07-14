import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SpecPagesRoutingModule } from './spec-pages-routing.module';
import { Error401Component } from './error-401/error-401.component';
import { Error404Component } from './error-404/error-404.component';
@NgModule({
  declarations: [Error401Component, Error404Component],
  imports: [
    CommonModule,
    SharedModule,
    SpecPagesRoutingModule
  ]
})
export class SpecPagesModule { }

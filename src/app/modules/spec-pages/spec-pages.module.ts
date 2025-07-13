import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SpecPagesRoutingModule } from './spec-pages-routing.module';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    SharedModule,
    SpecPagesRoutingModule
  ]
})
export class SpecPagesModule { }

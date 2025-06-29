import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { HowToUseExploreTabComponent } from './how-to-use-explore-tab/how-to-use-explore-tab.component';
import { SampleListComponent } from './how-to-use-explore-tab/sample-list/sample-list.component';
import { SampleDetailComponent } from './how-to-use-explore-tab/sample-detail/sample-detail.component';
@NgModule({
  declarations: [SampleComponent,SampleListComponent,SampleDetailComponent,HowToUseExploreTabComponent],
  imports: [
    CommonModule,
    SharedModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }

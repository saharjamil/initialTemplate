import { Component } from '@angular/core';
import { AppSetting } from '../../resources/AppSetting';
import { TabInterface } from '../../interfaces/tabInterface';
import { SampleListComponent } from './sample-list/sample-list.component';
@Component({
  selector: 'app-how-to-use-explore-tab',
  standalone:false,
  templateUrl: './how-to-use-explore-tab.component.html',
  styleUrl: './how-to-use-explore-tab.component.scss'
})
export class HowToUseExploreTabComponent {
  setting: AppSetting = new AppSetting();
  defaultTab: TabInterface[] = [
      { id: 'ticketList', title: 'لیست', icon: 'bi-envelope', active: true, componentRef: SampleListComponent, data: {}, closable: false },
  ];
}

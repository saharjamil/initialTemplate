import { Component } from '@angular/core';
import { AppSetting } from '../../../core/resources/app-setting';
import { ITab } from '../../../core/interfaces/tab';
import { SampleListComponent } from './sample-list/sample-list.component';
@Component({
  selector: 'app-how-to-use-explore-tab',
  standalone: false,
  templateUrl: './how-to-use-explore-tab.component.html',
  styleUrl: './how-to-use-explore-tab.component.scss',
})
export class HowToUseExploreTabComponent {
  setting: AppSetting = new AppSetting();
  defaultTab: ITab[] = [
    {
      id: 'ticketList',
      title: 'لیست',
      icon: 'fileText',
      active: true,
      componentRef: SampleListComponent,
      data: {},
      closable: false,
    },
  ];
}

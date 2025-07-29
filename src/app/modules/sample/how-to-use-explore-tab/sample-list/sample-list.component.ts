import { Component } from '@angular/core';
import { AppSetting } from '../../../../core/resources/app-setting';
import { ExploreTabsService } from '../../../../shared/services/explore-tabs.service';
import { ITab } from '../../../../core/interfaces/tab.interface';
import { SampleViewModel } from '../../../../core/viewModels/sample-view-model';
import { SampleDetailComponent } from '../sample-detail/sample-detail.component';

@Component({
  selector: 'app-sample-list',
  standalone:false,
  templateUrl: './sample-list.component.html',
  styleUrl: './sample-list.component.scss'
})
export class SampleListComponent {
  ticketList: SampleViewModel[] = [
    {
      "ID": 4178,
      "SectionTitle": "عضویت در سامانه",
      "StatusTypeTitle": "ایجاد",
      "PriorityTypeTitle": "آنی",
      "TicketTypeTitle": "ایجاد / ویرایش نام کاربری یا رمز عبور",
      "Subject": "خطای ناشناخته",
      "TrackingCode": "SPS1924178",
      "CreatorFullName": "مهگل عرب",
      "CreationDateTime": "1404/02/01 | 15:47:51",
    },
    {
      "ID": 4177,
      "SectionTitle": "عرضه ",
      "StatusTypeTitle": "ایجاد",
      "PriorityTypeTitle": "آنی",
      "TicketTypeTitle": "حذف/ ویرایش عرضه",
      "Subject": "راهنمایی کار با سامانه",
      "TrackingCode": "SPS11114177",
      "CreatorFullName": "فربد پویافرد",
      "CreationDateTime": "1404/01/31 | 17:48:02",

    },
    {
      "ID": 4170,
      "SectionTitle": "عضویت در سامانه",
      "StatusTypeTitle": "ایجاد",
      "PriorityTypeTitle": "آنی",
      "TicketTypeTitle": "ایجاد / ویرایش نام کاربری یا رمز عبور",
      "Subject": "خطای ناشناخته",
      "TrackingCode": "SPS1924170",
      "CreatorFullName": "نیلوفر عظیمی",
      "CreationDateTime": "1404/01/31 | 12:24:02",
    },
    {
      "ID": 4167,
      "SectionTitle": "عضویت در سامانه",
      "StatusTypeTitle": " اختتام با یادداشت",
      "PriorityTypeTitle": "فوری",
      "TicketTypeTitle": "ایجاد / ویرایش نام کاربری یا رمز عبور",
      "Subject": "تفکیک تیکت های در وضعیت ایجاد",
      "TrackingCode": "SPS1924167",
      "CreatorFullName": "مینا احمدی",
      "CreationDateTime": "1404/01/31 | 10:46:11",
    },
    {
      "ID": 4160,
      "SectionTitle": "عضویت در سامانه",
      "StatusTypeTitle": " اختتام با یادداشت",
      "PriorityTypeTitle": "فوری",
      "TicketTypeTitle": "ایجاد / ویرایش نام کاربری یا رمز عبور",
      "Subject": "لورم ایپسوم",
      "TrackingCode": "SPS1924167",
      "CreatorFullName": "مینا احمدی",
      "CreationDateTime": "1404/01/31 | 10:46:11",
    },
  ];
  setting: AppSetting = new AppSetting();
  constructor(private tabsService: ExploreTabsService) { }
  onTicketSelected(ticket: SampleViewModel) {
    const tab: ITab = {
      id: ticket.ID.toString(),
      title: '#' + ticket.Subject,
      componentRef: SampleDetailComponent,
      active: true,
      closable: true,
      data: ticket,
    }
    this.tabsService.openTab(this.setting.samplePageKey, tab);
  }
}

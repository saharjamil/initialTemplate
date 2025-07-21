import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  standalone:false,
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss'
})
export class NoDataComponent {
  @Input() imageMaxWidth?: string = '300px';
  @Input() fontSize?: string = '1.5rem';
  @Input() noDataText?:string = 'اطلاعاتی جهت نمایش موجود نمی باشد!'

}

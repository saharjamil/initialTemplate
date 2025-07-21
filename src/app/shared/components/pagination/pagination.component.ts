import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppSetting } from '../../../core/resources/app-setting';

@Component({
  selector: 'app-pagination',
  standalone:false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() pageNumber = 1;
  @Input() pageSize = AppSetting.pageSize;
  @Input() id: string = '';
  @Output() onPaginationChange: EventEmitter<{ pageNumber: number; pageSize: number}> = new EventEmitter();
  setting: AppSetting = new AppSetting();
  isMobile: boolean = false;
  pageSizeChanged() {
    this.pageNumber = 1;
    this.emitPaginationChanged();
  }
  pageNumberChanged(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.emitPaginationChanged();
  }
  emitPaginationChanged() {
    this.onPaginationChange.emit({pageNumber:this.pageNumber, pageSize : this.pageSize})
    
  }
}

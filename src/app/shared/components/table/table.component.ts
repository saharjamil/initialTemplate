import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppSetting } from '../../../core/resources/AppSetting';
import { ResultViewModel } from '../../../core/viewModels/ResultViewModel';
import { TableCustomActionInterface } from '../../../core/interfaces/tableCustomActionInterface';
import { TableCustomActionEventInterFace } from '../../../core/interfaces/tableCustomActionEventInterface';
@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() columns: Array<{Key:string,Title:string}> = [];
  @Input() data: ResultViewModel<any> = new ResultViewModel<any>();
  @Input() hasEditBtn: Boolean = false;
  @Input() hasRemoveBtn: Boolean = false;
  @Input() hasViewBtn: Boolean = false;
  @Input() hasFolderBtn: Boolean = false;
  @Input() hasRowActions: Boolean = false;
  @Input() customActions: Array<TableCustomActionInterface<any>> = [];
  @Output() onRemove:EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit:EventEmitter<any> = new EventEmitter<any>();;
  @Output() onEnable:EventEmitter<any> = new EventEmitter<any>();;
  @Output() onDisable:EventEmitter<any> = new EventEmitter<any>();
  @Output() onView:EventEmitter<any> = new EventEmitter<any>();
  @Output() onOpenFolder:EventEmitter<any> = new EventEmitter<any>();
  @Output() customAction: EventEmitter<TableCustomActionEventInterFace<any>> = new EventEmitter<TableCustomActionEventInterFace<any>>();
  setting: AppSetting = new AppSetting();
  filter: string = '';
  pageSize: number = AppSetting.pageSize;
  pageNumber: number = 1;

  ngOnInit() { }
  onPaginateChange(event:{pageNumber:number,pageSize:number}) {
    this.pageNumber = event.pageNumber;
    this.pageSize = event.pageSize;
    console.log('pageNumber: ',this.pageNumber)
    console.log('pageSize: ',this.pageSize)
  }

  onViewSelected(item:any) {
    this.onView.emit(item)
  }
  onFolderSelected(item:any) {
    this.onOpenFolder.emit(item)
  }
  onEditSelected(item:any) {
    this.onEdit.emit(item)
  }
  onRemoveSelected(item:any) {
    this.onRemove.emit(item)
  }
  onCustomAction(customAction: TableCustomActionEventInterFace<any>) {
    this.customAction.emit(customAction);
  }

}

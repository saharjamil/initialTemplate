import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppSetting } from '../../../core/resources/AppSetting';
import { ResultViewModel } from '../../../core/viewModels/ResultViewModel';
import { TableRowActionInterface } from '../../../core/interfaces/tableRowActionInterface';
import { TableCustomActionEventInterFace } from '../../../core/interfaces/tableCustomActionEventInterface';
import { TableBuiltInActionsConfigType } from '../../../core/types/TableBuiltInActionsConfigType';
import { T } from '@angular/cdk/portal-directives.d-BoG39gYN';
@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() columns: Array<{Key:string,Title:string}> = [];
  @Input() data: ResultViewModel<any> = new ResultViewModel<any>();
  @Input() mainActions: TableBuiltInActionsConfigType<any> = {};
  @Input() customActions: Array<TableRowActionInterface<any>> = [];
  @Input() pageSize: number = AppSetting.pageSize;
  @Output() onRemove:EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit:EventEmitter<any> = new EventEmitter<any>();;
  @Output() onEnable:EventEmitter<any> = new EventEmitter<any>();;
  @Output() onDisable:EventEmitter<any> = new EventEmitter<any>();
  @Output() onView:EventEmitter<any> = new EventEmitter<any>();
  @Output() onOpenFolder:EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonAction: EventEmitter<TableCustomActionEventInterFace<any>> = new EventEmitter<TableCustomActionEventInterFace<any>>();
  setting: AppSetting = new AppSetting();
  filter: string = '';
  pageNumber: number = 1;
  allActions: TableRowActionInterface<T>[] = [];

  ngOnInit() {
    this.getAllActions()
  }
  
  onPaginateChange(event:{pageNumber:number,pageSize:number}) {
    this.pageNumber = event.pageNumber;
    this.pageSize = event.pageSize;
  }

  onButtonAction(customAction: TableCustomActionEventInterFace<any>) {
    this.buttonAction.emit(customAction);
  }

  getAllActions() {

    const config = this.mainActions;

    const actions: TableRowActionInterface<T>[] = [];

    if (config.edit) {
      actions.push({
        title: config.edit.icon || this.setting.editTooltip,
        icon: config.edit.icon || 'pen2',
        type: config.edit.type || 'iconic',
        ...config.edit,
      });
    }

    if (config.remove) {
      actions.push({
        title: config.remove.icon || this.setting.removeTooltip,
        icon: config.remove.icon || 'trashBinMinimalistic',
        type: config.remove.type || 'iconic',
        ...config.remove,
      });
    }

    if (config.view) {
      actions.push({
        title: config.view.icon ||  this.setting.viewTooltip,
        icon: config.view.icon || 'eye',
        type: config.view.type || 'iconic',
        ...config.view,
      });
    }

    if (config.openFolder) {
      actions.push({
        title: config.openFolder.title || this.setting.folderTooltip,
        icon: config.openFolder.icon || 'folder',
        type: config.openFolder.type || 'iconic',
        ...config.openFolder,
      });
    }

    this.allActions =  [...actions, ...this.customActions];
  }
}

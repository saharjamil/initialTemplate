import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AppSetting } from '../../../core/resources/app-setting';
import { ResultViewModel } from '../../../core/viewModels/result-view-model';
import { ITableActionConfig } from '../../../core/interfaces/table-action-config';
import { ITableActionEvent } from '../../../core/interfaces/table-action-event';
import { TableMainActionsConfig } from '../../../core/types/table-main-actions-config';
import { ITableExtraColumns } from '../../../core/interfaces/table-extra-columns';
@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent{
  @Input() columns: Array<{ Key: string, Title: string }> = [];
  @Input() extraColumns:Array<ITableExtraColumns<any>> = [];
  @Input() data: ResultViewModel<any> = new ResultViewModel<any>();
  @Input() mainActions: TableMainActionsConfig<any> = {};
  @Input() customActions: Array<ITableActionConfig<any>> = [];
  @Input() pageSize: number = AppSetting.pageSize;
  @Output() onDisable:EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonAction: EventEmitter<ITableActionEvent<any>> = new EventEmitter<ITableActionEvent<any>>();
  setting: AppSetting = new AppSetting();
  filter: string = '';
  pageNumber: number = 1;
  allActions: ITableActionConfig<any>[] = [];

  constructor(private cdr:ChangeDetectorRef){}
  ngOnInit() {
    this.getAllActions()
  }
  onPaginateChange(event:{pageNumber:number,pageSize:number}) {
    this.pageNumber = event.pageNumber;
    this.pageSize = event.pageSize;
  }

  onButtonAction(customAction: ITableActionEvent<any>) {
    this.buttonAction.emit(customAction);
  }

  getAllActions() {
    const config = this.mainActions;
    const actions: ITableActionConfig<any>[] = [];

    if (config.edit) {
      actions.push({
        title: config.edit.title || this.setting.editTooltip,
        icon: config.edit.icon || 'pen2',
        type: config.edit.type || 'iconic',
        ...config.edit,
      });
    }

    if (config.remove) {
      actions.push({
        title: config.remove.title || this.setting.removeTooltip,
        icon: config.remove.icon || 'trashBinMinimalistic',
        type: config.remove.type || 'iconic',
        ...config.remove,
      });
    }

    if (config.view) {
      actions.push({
        title: config.view.title ||  this.setting.viewTooltip,
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

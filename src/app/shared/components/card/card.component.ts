import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IContextMenuItem } from '../../../core/interfaces/context-menu-item.interface';
import { HelperService } from '../../services/helper.service';
import { IExpandablePanelPostion } from '../../../core/interfaces/expandable-panel-position.interface';
import { ICardActionConfig } from '../../../core/interfaces/card-action-config';

@Component({
  selector: 'app-card',
  standalone:false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent<T> {
  @Input() cardTitle: string = '';
  @Input() showPageNumber: boolean = false;
  @Input() data: any;
  @Input() actionMenuItems: ICardActionConfig<T>[] = [];
  @Input() actionMenuBorderColor?: string = 'var(--primary-20)';
  @Input() actionMenuType: 'expandable' | 'button' = 'expandable';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('actionMenuTrigger') actionMenuTrigger!: ElementRef;
  actionMenuPosition: IExpandablePanelPostion = {}
  constructor(private helperService:HelperService){}
  showMenu: boolean = false;

  onShowMenu(event:MouseEvent) {
    this.showMenu = true
    const domRect: DOMRect = this.helperService.calcMouseEventPosition(event);
    this.actionMenuPosition.top = domRect.top + domRect.height + 24;
    this.actionMenuPosition.left = domRect.left;
  }
  onCloseMenu() {
    this.showMenu = false;
  }

  onSearchSelected(event: any) {
    if (event.type == 'search') {
      event.preventDefault();
      return
    }
    else if(typeof event == 'string') {
      this.onSearch.emit(event)
    }
  }
}

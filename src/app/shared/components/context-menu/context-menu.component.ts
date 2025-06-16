import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextMenuItemInterface } from '../../../core/interfaces/contextMenuItemInterface';
import { expandablePanelPostionInterface } from '../../../core/interfaces/expandablePanelPositionInterface';
import { AppSetting } from '../../../core/resources/AppSetting';
@Component({
  selector: 'app-context-menu',
  standalone:false,
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  @Input() position: expandablePanelPostionInterface = {};
  @Input() menuItems: ContextMenuItemInterface[] = [];
  @Output() closeMenu: EventEmitter<void> = new EventEmitter();
  setting: AppSetting = new AppSetting();
  onMenuItemClick(action: () => void) {
    action(); // Call the provided action function
    this.closeMenu.emit(); // Emit close event after action
  }

  closeContextMenu() {
    this.closeMenu.emit();
  }
}

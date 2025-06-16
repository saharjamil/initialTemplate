import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppSetting } from '../resources/AppSetting';
import { CalendarData } from '../data/calendarData';
import { expandablePanelPostionInterface } from '../interfaces/expandablePanelPositionInterface';
import { ContextMenuItemInterface } from '../interfaces/contextMenuItemInterface';
@Component({
  selector: 'app-sample',
  standalone:false,
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  setting: AppSetting = new AppSetting();
  calendarData: CalendarData = new CalendarData();
  isLoadingCalendarData: boolean = false;
  ngSelectData = [
    { ID: 1, Title: 'لورم ایپسوم' },
    { ID: 2, Title: 'لورم ایپسوم' },
    { ID: 3, Title: 'لورم ایپسوم' },
  ];
  datePickerInput1: FormControl = new FormControl();
  datePickerInput2: FormControl = new FormControl();
  datePickerInput3: FormControl = new FormControl();
  datePickerInput4: FormControl = new FormControl();
  datePickerInput5: FormControl = new FormControl();
  datePickerInput6: FormControl = new FormControl();
  firstContextMenuPosition: expandablePanelPostionInterface = {}
  firstContextMenuItems: ContextMenuItemInterface[] = [];
  firstContextMenuIsShow: boolean = false;
  secondContextMenuPosition: expandablePanelPostionInterface = {}
  secondContextMenuItems: ContextMenuItemInterface[] = [];
  secondContextMenuIsShow: boolean = false;
  fireSuccessSwalPrimaryButton() {
    this.setting.fireSwal('success','primary')
  }
  fireSuccessSwalSecondaryButton() {
    this.setting.fireSwal('success','secondary')
  }
  fireSuccessSwalSuccessButton() {
    this.setting.fireSwal('success','success')
  }
  fireSuccessSwalErrorButton() {
    this.setting.fireSwal('success','error')
  }
  fireSuccessSwalWarningButton() {
    this.setting.fireSwal('success','warning')
  }
  fireSuccessSwalInfoButton() {
    this.setting.fireSwal('success','info')
  }
  fireWarningSwalPrimaryButton() {
    this.setting.fireSwal('warning','primary')
  }
  fireWarningSwalSecondaryButton() {
    this.setting.fireSwal('warning','secondary')
  }
  fireWarningSwalSuccessButton() {
    this.setting.fireSwal('warning','success')
  }
  fireWarningSwalErrorButton() {
    this.setting.fireSwal('warning','error')
  }
  fireWarningSwalWarningButton() {
    this.setting.fireSwal('warning','warning')
  }
  fireWarningSwalInfoButton() {
    this.setting.fireSwal('warning','info')
  }

  
  onFirstContextMenuRightClick(event: MouseEvent) {
    this.closeSecondContextMenu();
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    this.firstContextMenuPosition.top = elementRect.top;
    this.firstContextMenuPosition.left = elementRect.left + elementRect.width + 5;
    this.firstContextMenuItems = [{
      label: 'لورم ایپسوم',
      action: () => this.fireSuccessSwalPrimaryButton(),
      icon: 'leaf'
    },
    {
      label: 'لورم ایپسوم متن',
      action: () => this.fireWarningSwalPrimaryButton(),
      icon: 'userRounded'
      }]
    this.firstContextMenuIsShow = true;

  }
  onSecondContextMenuRightClick(event: MouseEvent) {
    this.closeFirstContextMenu();
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    this.secondContextMenuPosition.top = elementRect.top;
    this.secondContextMenuPosition.left = elementRect.left + elementRect.width + 5;
    this.secondContextMenuItems = [{
      label: 'لورم ایپسوم متن',
      action: () => this.fireSuccessSwalSecondaryButton(),
      icon: 'star'
    },
    {
      label: 'لورم ایپسوم متن ساختگی',
      action: () => this.fireWarningSwalSecondaryButton(),
      icon: 'pallete2'
      }]
    this.secondContextMenuIsShow = true;

  }
  closeFirstContextMenu() {
    this.firstContextMenuIsShow = false;
  }
  closeSecondContextMenu() {
    this.secondContextMenuIsShow = false;
  }


}

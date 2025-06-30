import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AppSetting } from '../../core/resources/AppSetting';
import { CalendarData } from '../../core/data/calendarData';
import { expandablePanelPostionInterface } from '../../core/interfaces/expandablePanelPositionInterface';
import { ContextMenuItemInterface } from '../../core/interfaces/contextMenuItemInterface';
import { FileUploader } from 'ng2-file-upload';
import { HelperService } from '../../shared/services/helper.service';
import { CalendarFilterDateViewModel } from '../../shared/components/persian-calendar/calendarViewModels/CalendarFilterDateViewModel';
const URL = "";
@Component({
  selector: 'app-sample',
  standalone:false,
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})

export class SampleComponent {
  
  setting: AppSetting = new AppSetting();
  uploader: FileUploader = new FileUploader({url:URL});
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
  contextMenuItems: ContextMenuItemInterface[] = [{
      label: 'لورم ایپسوم متن',
      action: () => this.fireSuccessSwalSecondaryButton(),
      icon: 'star'
    },
    {
      label: 'لورم ایپسوم متن ساختگی',
      action: () => this.fireWarningSwalSecondaryButton(),
      icon: 'palette2'
      }];
  firstContextMenuPosition: expandablePanelPostionInterface = {}
  firstContextMenuIsShow: boolean = false;
  secondContextMenuPosition: expandablePanelPostionInterface = {}
  secondContextMenuIsShow: boolean = false;
  thirdContextMenuPosition: expandablePanelPostionInterface = {}
  thirdContextMenuIsShow: boolean = false;
  fourthContextMenuPosition: expandablePanelPostionInterface = {}
  fourthContextMenuIsShow: boolean = false;

  constructor(public helperService:HelperService){}
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
    this.closeAllContextMenus();
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    this.firstContextMenuPosition.top = elementRect.top;
    this.firstContextMenuPosition.left = elementRect.left + elementRect.width + 5;
    
    this.firstContextMenuIsShow = true;

  }
  onSecondContextMenuRightClick(event: MouseEvent) {
    this.closeAllContextMenus();
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    this.secondContextMenuPosition.top = elementRect.top;
    this.secondContextMenuPosition.right = window.innerWidth - elementRect.right + elementRect.width - 12
    
    this.secondContextMenuIsShow = true;

  }
  onThirdContextMenuRightClick(event: MouseEvent) {
    this.closeAllContextMenus();
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    this.thirdContextMenuPosition.top = elementRect.top + elementRect.height + 5;
    this.thirdContextMenuPosition.right = window.innerWidth - elementRect.right - 16;
    this.thirdContextMenuIsShow = true;
  }
  onFourthContextMenuRightClick(event: MouseEvent) {
    this.closeAllContextMenus();
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    this.fourthContextMenuPosition.bottom = window.innerHeight - elementRect.top + 5;
    this.fourthContextMenuPosition.left = elementRect.left;
    this.fourthContextMenuIsShow = true;
  }
  closeFirstContextMenu() {
    this.firstContextMenuIsShow = false;
  }
  closeSecondContextMenu() {
    this.secondContextMenuIsShow = false;
  }
  closeThirdContextMenu() {
    this.thirdContextMenuIsShow = false;
  }
  closeFourthContextMenu() {
    this.fourthContextMenuIsShow = false;
  }

  closeAllContextMenus() {
    this.closeFirstContextMenu();
    this.closeSecondContextMenu();
    this.closeThirdContextMenu();
    this.closeFourthContextMenu();
  }
  usernameNgModel: string = '';
  submitForm(form:NgForm) {
    if (form.valid) {
      console.log('valid')
    }
  }

  onFileSelect() {
    console.log(this.uploader.queue.forEach(item => {
      item.file.type
    }))
  }

  calendarLoadingData: boolean = false;
  onNavigateToDate(event: CalendarFilterDateViewModel) {
    //related apis for getting dates comes here
    this.calendarLoadingData = true;
    console.log(event.Year, event.Month)
    setTimeout(() => {
      this.calendarLoadingData = false;
    },1000)
  }

  
}

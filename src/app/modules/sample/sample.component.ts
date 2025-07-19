import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AppSetting } from '../../core/resources/AppSetting';
import { CalendarData } from '../../core/data/calendarData';
import { expandablePanelPostionInterface } from '../../core/interfaces/expandablePanelPositionInterface';
import { ContextMenuItemInterface } from '../../core/interfaces/contextMenuItemInterface';
import { FileUploader } from 'ng2-file-upload';
import { HelperService } from '../../shared/services/helper.service';
import { CalendarFilterDateViewModel } from '../../shared/components/persian-calendar/calendarViewModels/CalendarFilterDateViewModel';
import { data } from '../../core/data/mockTableData';
import { TableRowActionInterface } from '../../core/interfaces/tableRowActionInterface';
import { TableCustomActionEventInterFace } from '../../core/interfaces/tableCustomActionEventInterface';
import {TableBuiltInActionsConfigType} from '../../core/types/TableBuiltInActionsConfigType'
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
  datePickerInput1: FormControl = new FormControl('');
  datePickerInput2: FormControl = new FormControl();
  datePickerInput3: FormControl = new FormControl();
  datePickerInput4: FormControl = new FormControl();
  datePickerInput5: FormControl = new FormControl();
  datePickerInput6: FormControl = new FormControl();
  datePickerInput7: FormControl = new FormControl();
  datePickerInput8: FormControl = new FormControl();
  datePickerInput9: FormControl = new FormControl();
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
  @BlockUI('blockUI') blockUI!: NgBlockUI;
  @BlockUI('customBlockUi') customBlockUi!: NgBlockUI;
  sampleFormInputNgModels = {
    Name: '',
    FamilyName: '',
    FatherName:'',
    CellPhone: '',
    BirthDate: '',
    Email: '',
    Date:'',
    IP: '',
  }
  mockData = data;
  tableColumns = [
    { Key: 'FirstName', Title: 'نام' },
    { Key: 'LastName', Title: 'نام خانوادگی' },
    { Key: 'Email', Title: 'ایمیل' },
    { Key: 'IPAddress', Title: 'آدرس IP' },
  ]
  tableMainActions: TableBuiltInActionsConfigType<any> = {
    edit: {
      buttonColor: 'primary',
      buttonColorType: 'highlight',
      type: 'iconic',
      action: (item: any) => this.onEditItem(item),
      order: 2,
    },
    remove: {
      buttonColor: 'error',
      buttonColorType: 'outline',
      type: 'text',
      action: (item: any) => this.onRemoveItem(item),
      order: 1,
    },
    openFolder: {
      action: (item: any) => this.onOpenFolder(item),
      buttonColor: 'warning',
      buttonColorType: 'outline',
      order: 3,
    }
  }
  tableCustomActions: Array<TableRowActionInterface<any>> = [
    {type: 'iconic', icon: 'multipleForwardLeft', title: 'ارسال', order: 4, action: (data:any) => this.onSend(data) }
  ]
  secondTableMainActions: TableBuiltInActionsConfigType<any> = {
    edit: {
      action: (item: any) => this.onEditItem(item),
    },
    remove: {
      action: (item:any)=> this.onRemoveItem(item)
    },
    view: {
      action: (item:any) => this.onViewItem(item)
    },
    openFolder: {
      action : (item:any) => this.onOpenFolder(item)
    }
  }
   constructor(public helperService: HelperService, private cdr:ChangeDetectorRef) { }

   ngAfterViewInit() {
        this.cdr.detectChanges();
    }
  ngOnInit(): void {
    
  }
  onSubmitForm() {
    this.sampleFormInputNgModels.Date = this.datePickerInput1.value
    console.log(this.sampleFormInputNgModels)
    
}
  fireSuccessSwalPrimaryButton() {
    this.helperService.fireSwal({})
  }
  fireSuccessSwalSecondaryButton() {
    this.helperService.fireSwal({buttonType: "secondary"})
  }
  fireSuccessSwalSuccessButton() {
    this.helperService.fireSwal({buttonType: "success"})
  }
  fireSuccessSwalErrorButton() {
    this.helperService.fireSwal({ buttonType: "error"})
  }
  fireSuccessSwalWarningButton() {
    this.helperService.fireSwal({ buttonType: "warning"})
  }
  fireSuccessSwalInfoButton() {
    this.helperService.fireSwal({ buttonType: "info"})
  }
  fireWarningSwalPrimaryButton() {
    this.helperService.fireSwal({ text: AppSetting.errorMessage, buttonType: "primary"})
  }
  fireWarningSwalSecondaryButton() {
    this.helperService.fireSwal({ text: AppSetting.errorMessage, buttonType: "secondary", status:'warning'})
  }
  fireWarningSwalSuccessButton() {
    this.helperService.fireSwal({ text: AppSetting.errorMessage, buttonType: "success", status:'warning'})
  }
  fireWarningSwalErrorButton() {
    this.helperService.fireSwal({ text: AppSetting.errorMessage, buttonType: "error", status:'warning'})
  }
  fireWarningSwalWarningButton() {
    this.helperService.fireSwal({ text: AppSetting.errorMessage, buttonType: "warning", status:'warning'})
  }
  fireWarningSwalInfoButton() {
    this.helperService.fireSwal({ text: AppSetting.errorMessage, buttonType: "info", status:'warning'})
  }
  firePrimaryToast() {
    this.helperService.fireSwal({ isToast:true, status:'primary'})
  }
  fireSecondaryToast() {
    this.helperService.fireSwal({ isToast:true, status:'secondary'})
  }
  fireSuccessToast() {
    this.helperService.fireSwal({ isToast:true})
  }
  fireErrorToast() {
    this.helperService.fireSwal({ isToast:true, status:'error'})
  }
  fireInfoToast() {
    this.helperService.fireSwal({ isToast:true, status:'info'})
  }
  fireWarningToast() {
    this.helperService.fireSwal({ isToast:true, status:'warning'})
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

  showBlockUI(message?: string) {
    this.blockUI.start(message);
    setTimeout(() => {
      this.blockUI.stop();
    },1000)
  }

  showCustomBlockUI() {
    this.customBlockUi.start();
    setTimeout(() => {
      this.customBlockUi.stop();
    },1000)
  }


  onRemoveItem(item:any) {
    console.log('remove',item)
  }
  onEditItem(item:any) {
    console.log('edit',item)
  }
  onOpenFolder(item: any) {
    console.log('openFolder',item)
  }
  onViewItem(item: any) {
    console.log('view',item)
  }
  onSend(item: any) {
    
    console.log('send',item)
  }
  handleButtonAction(event: TableCustomActionEventInterFace<any>) {
    event.action(event.data)
  }
  
}

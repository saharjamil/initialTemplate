import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AppSetting } from '../../core/resources/app-setting';
import { CalendarData } from '../../core/data/calendar-data';
import { IExpandablePanelPostion } from '../../core/interfaces/expandable-panel-position';
import { IContextMenuItem } from '../../core/interfaces/context-menu-item';
import { FileUploader } from 'ng2-file-upload';
import { HelperService } from '../../shared/services/helper.service';
import { CalendarFilterDateViewModel } from '../../core/viewModels/calendar-filter-date-view-model';
import { data } from '../../core/data/mock-table-data';
import { ITableActionConfig } from '../../core/interfaces/table-action-config';
import { ITableActionEvent } from '../../core/interfaces/table-action-event';
import {TableMainActionsConfig} from '../../core/types/table-main-actions-config'
import { ResultViewModel } from '../../core/viewModels/result-view-model';
import { StepperViewModel } from '../../core/viewModels/stepper-view-model';
import { PersianCalendarComponent } from '../../shared/components/persian-calendar/persian-calendar.component';
import { SampleListComponent } from './how-to-use-explore-tab/sample-list/sample-list.component';
import { SampleDetailComponent } from './how-to-use-explore-tab/sample-detail/sample-detail.component';
import { ITableExtraColumns } from '../../core/interfaces/table-extra-columns';
const URL = "";
export class mockDataViewModel{
  ID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  IPAddress: string;
  IsActive: boolean;
  constructor(
    init?:mockDataViewModel
  ) {
    this.ID = init?.ID || 0;
    this.FirstName = init?.FirstName || '';
    this.LastName = init?.LastName || '';
    this.Email = init?.Email || '';
    this.IPAddress = init?.IPAddress || '';
    this.IsActive = init?.IsActive || false;

    
  }
}

@Component({
  selector: 'app-sample',
  standalone:false,
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})

export class SampleComponent {
  
  setting: AppSetting = new AppSetting();

  //Related To Stepper
  stepperItems: StepperViewModel[] = [];
   verticalStepperItems: StepperViewModel[] = [];
  @ViewChild('stepperTemplateRef', {static:false}) stepperTemplateRef!: TemplateRef<any>;
  constructor(public helperService: HelperService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void { }
  ngAfterViewInit() {
    this.verticalStepperItems= [
        { ID: 1, Title: 'درخواست‌ها', TitleEn:'Requests', Icon: 'clipboardText', IsActive: false, Condition: true, Component: SampleListComponent },
        { ID:2, Title: 'تنظیمات', TitleEn:'Setting', Icon: 'setting', IsActive: false, Condition: true, Component: SampleDetailComponent },
        { ID:3, Title: 'دسترسی‌ها', TitleEn:'Access', Icon: 'keySquare2', IsActive: false, Condition: true, Component: this.stepperTemplateRef },
        { ID:4, Title: 'مدیریت کاربران', TitleEn:'UsersManagement', Icon: 'usersGroupRounded', IsActive: false, Condition: true },
    ]
    this.stepperItems= [
        { ID: 1, Title: 'درخواست‌ها', TitleEn:'Requests', Icon: 'clipboardText', IsActive: false, Condition: true},
        { ID:2, Title: 'تنظیمات', TitleEn:'Setting', Icon: 'setting', IsActive: false, Condition: true},
        { ID:3, Title: 'دسترسی‌ها', TitleEn:'Access', Icon: 'keySquare2', IsActive: false, Condition: true },
        { ID:4, Title: 'مدیریت کاربران', TitleEn:'UsersManagement', Icon: 'usersGroupRounded', IsActive: false, Condition: true },
    ]
    this.cdr.detectChanges();
  }

  
  //Related To Swals
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


  //Related To Context Menu
  contextMenuItems: IContextMenuItem[] = [{
    label: 'لورم ایپسوم متن',
      action: () => this.fireSuccessSwalSecondaryButton(),
      icon: 'star'
    },
    {
      label: 'لورم ایپسوم متن ساختگی',
      action: () => this.fireWarningSwalSecondaryButton(),
      icon: 'palette2'
    }
  ];
  firstContextMenuPosition: IExpandablePanelPostion = {}
  firstContextMenuIsShow: boolean = false;
  secondContextMenuPosition: IExpandablePanelPostion = {}
  secondContextMenuIsShow: boolean = false;
  thirdContextMenuPosition: IExpandablePanelPostion = {}
  thirdContextMenuIsShow: boolean = false;
  fourthContextMenuPosition: IExpandablePanelPostion = {}
  fourthContextMenuIsShow: boolean = false;

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

  //Relate To Form && Form Validation
  usernameNgModel: string = '';
  switcher1: boolean = true;
  switcher2: boolean = true;
  switcher3: boolean = true;
  switcher4: boolean = true;
  switcher5: boolean = true;
  switcher6: boolean = true;
  uploader: FileUploader = new FileUploader({ url: URL });
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
  sampleFormInputNgModels = {
    Name: '',
    FamilyName: '',
    FatherName:'',
    CellPhone: '',
    BirthDate: '',
    Email: '',
    Date:'',
    IP: '',
    IsActive:true,
  }
  onSubmitForm() {
    this.sampleFormInputNgModels.Date = this.datePickerInput1.value;
    console.log(this.sampleFormInputNgModels)
  }
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
  //Related To Calendar
  calendarData: CalendarData = new CalendarData();
  isLoadingCalendarData: boolean = false;
  calendarLoadingData: boolean = false;
  onNavigateToDate(event: CalendarFilterDateViewModel) {
    //related apis for getting dates comes here
    this.calendarLoadingData = true;
    console.log(event.Year, event.Month)
    setTimeout(() => {
      this.calendarLoadingData = false;
    },1000)
  }

  //Related To BlockUI
  @BlockUI('blockUI') blockUI!: NgBlockUI;
  @BlockUI('customBlockUi') customBlockUi!: NgBlockUI;
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
  //Related To Table
  mockData: ResultViewModel<mockDataViewModel> = data;
  tableColumns = [
    { Key: 'ID', Title: 'شناسه' },
    { Key: 'FirstName', Title: 'نام' },
    { Key: 'LastName', Title: 'نام خانوادگی' },
    { Key: 'Email', Title: 'ایمیل' },
    { Key: 'IPAddress', Title: 'آدرس IP' },
  ]
  tableExtraColumns: Array<ITableExtraColumns<mockDataViewModel>> = [
    { key: 'IsActive', title: 'وضعیت', type:'primary', disabled:false, action: (data:any) => this.onSwitchChange(data)}
  ]
  tableMainActions: TableMainActionsConfig<mockDataViewModel> = {
    edit: {
      buttonColor: 'primary',
      buttonColorType: 'highlight',
      type: 'iconic',
      action: (item: mockDataViewModel) => this.onEditItem(item),
      order: 2,
    },
    remove: {
      buttonColor: 'error',
      buttonColorType: 'outline',
      type: 'text',
      action: (item: mockDataViewModel) => this.onRemoveItem(item),
      order: 1,
    },
    openFolder: {
      action: (item: mockDataViewModel) => this.onOpenFolder(item),
      buttonColor: 'warning',
      buttonColorType: 'outline',
      order: 3,
    }
  }
  tableCustomActions: Array<ITableActionConfig<mockDataViewModel>> = [
    {type: 'iconic', icon: 'multipleForwardLeft', title: 'ارسال', order: 4, action: (data:any) => this.onSend(data) }
  ]
  secondTableMainActions: TableMainActionsConfig<mockDataViewModel> = {
    edit: {
      action: (item: mockDataViewModel) => this.onEditItem(item),
    },
    remove: {
      action: (item:mockDataViewModel)=> this.onRemoveItem(item)
    },
    view: {
      action: (item:mockDataViewModel) => this.onViewItem(item)
    },
    openFolder: {
      action : (item:mockDataViewModel) => this.onOpenFolder(item)
    }
  }

  onRemoveItem(item:mockDataViewModel) {
      console.log('remove',item)
  }
  onEditItem(item:mockDataViewModel) {
     console.log('edit',item)
  }
  onOpenFolder(item: mockDataViewModel) {
    console.log('openFolder',item)
  }
  onViewItem(item: mockDataViewModel) {
    console.log('view',item)
  }
  onSend(item: mockDataViewModel) {
    
    console.log('send',item)
  }
  onSwitchChange(item:mockDataViewModel) {
    console.log('switchChange',item)
  }
  handleButtonAction(event: ITableActionEvent<any>) {
    event.action(event.data)
  }

  
  
  
}

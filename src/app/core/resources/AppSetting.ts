import { AngularEditorConfig } from "@kolkov/angular-editor";
import Swal from "sweetalert2";
import { SvgIconConfigViewModel } from "../viewModels/SvgIconConfigViewModel";


export class AppSetting {
  // public static baseUrl = 'http://wlt-test-sandbox.htsc.ir:1030';
    public static baseUrl = 'http://localhost:5245';
    public static tokenWriterType = 1; // 1:Local Storage 2:RAM


    // ==================================================== MODAL
    public static newRecord = 'ایجاد رکورد جدید';
    public static editRecord = 'ویرایش رکورد جاری';
    public static detailRecord = 'جزییات رکورد جاری';

    // ==================================================== BLOCKUI
    public static BlockUIUpdate = 'در حال بروز رسانی اطلاعات...';
    public static BlockUILoading = 'در حال فراخوانی اطلاعات! لطفا منتظر بمانید...';

    // ==================================================== SNOTIFY
    public static error = 'error';
    public static danger = 'danger';
    public static warning = 'warning';
    public static success = 'success';
    public static errorTitle = 'خطا';
    public static warningTitle = 'هشدار';
    public static successTitle = 'موفقیت';
    public static invalidForm = 'لطفا در تکمیل فرم دقت فرمایید';

    // ==================================================== PAGINATION
    public static pageSize = 16;
    public quantityInPage = 'تعداد در صفحه';
    public previousLabel = 'صفحه‌ی قبل';
    public nextLabel = 'صفحه‌ی بعد';
    public currentLabel = 'شما در این صفحه هستید';
    // public pageSizesList: number[] = [5, 10, 20, 50, 100];
    public pageSizesList: Array<Object> = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 15 },
        { id: 4, value: 20 },
        { id: 5, value: 30 },
        { id: 6, value: 40 },
        { id: 7, value: 50 },
    ];
    
    // ==================================================== CLIENT MESSAGE
    public copyright = 'مدیریت، تحلیل، پیاده سازی و توسعه توسط اداره کل مهندسی نرم افزار | شرکت گسترش فناوری‌های نوین';



    // ==================================================== BUTTONS
    public save = 'ذخیره';
    public cancel = 'انصراف';
    public createUser = "ایجاد نام کابری";
    public inquiry = 'استعلام';


    // ==================================================== MASKS
    public dateMask = [/[1]/, /[3-4]/, /[0-9]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/];
    public cardNumberMask = [/[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public ibanMask = ['I', 'R', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    public cellphoneMask = [/[0]/, /[9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];


    // ==================================================== PLACEHOLDER
    public datePlaceholder = "تاریخ شمسی را وارد نمایید..."
    public emailPlaceHolder = "example1@example2.com";
    public phonePlaceHolder = "021xxxxxxxx";
    public cellphonePlaceHolder = "09xx-xxxxxxx";
    public nid = "کد ملی خود را وارد کنید";

  tabsCountLimit: number = 5;
  

    //ExploreTabPageKeys
    samplePageKey='samplePageKey'
  
    public acceptedUploadFileExtention = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/plain",
        "text/csv",
    ];
    public angularEditorConfig: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: "150px",
        minHeight: "150px",
        maxHeight: "150px",
        width: "auto",
        minWidth: "0",
        translate: "no",
        sanitize: false,
        enableToolbar: true,
        showToolbar: true,
        toolbarPosition: "top",
        placeholder: "متن درخواست را وارد کنید :)",
        defaultParagraphSeparator: "div",
        defaultFontName: "IranYekan",
        rawPaste: false,
        toolbarHiddenButtons: [
          [
            "strikeThrough",
            "subscript",
            "superscript",
            "indent",
            "outdent",
            "heading",
            "fontName",
            "undo",
            "redo",
            "fontSize",
    
            "customClasses",
            "link",
            "unlink",
            "insertImage",
            "insertVideo",
            "insertHorizontalRule",
            "removeFormat",
            "toggleEditorMode",
          ],
        ],
    };
  
    public swalToastStructure = Swal.mixin({
        toast: true,
        timer: 3000,
        position: 'bottom-right',
        showConfirmButton: false,
        width: 400,
        padding: '0.25rem',
        background: '#ffccd1',
    });



  //Related to Swal
  successSwalBaseConfig = {
    confirmButtonText: 'متوجه شدم',
    buttonsStyling: false,
    focusConfirm: false,
    icon: 'success',
    title: 'عملیات موفق',
    text: 'عملیات با موفقیت انجام شد.'
  };

  warningSwalBaseConfig = {
    confirmButtonText: 'متوجه شدم',
    buttonsStyling: false,
    focusConfirm: false,
    icon: 'warning',
    title: 'عملیات ناموفق',
    text: 'متاسفیم؛ در طول انجام عملیات خطایی رخ داد'
  };
  swalButtonClasses = {
    success: 'btn btn-success btn-md',
    primary: 'btn btn-primary btn-md',
    secondary: 'btn btn-secondary btn-md',
    info: 'btn btn-info btn-md',
    error: 'btn btn-error btn-md',
    warning: 'btn btn-warning btn-md'
  };
  private createSwalMixin(baseConfig: any, buttonType: keyof typeof this.swalButtonClasses) {
    return Swal.mixin({
      ...baseConfig,
      customClass: {
        confirmButton: this.swalButtonClasses[buttonType]
      }
    });
  }
  public swalMixins = {
    success: {
      success: this.createSwalMixin(this.successSwalBaseConfig, 'success'),
      primary: this.createSwalMixin(this.successSwalBaseConfig, 'primary'),
      secondary: this.createSwalMixin(this.successSwalBaseConfig, 'secondary'),
      info: this.createSwalMixin(this.successSwalBaseConfig, 'info'),
      error: this.createSwalMixin(this.successSwalBaseConfig, 'error'),
      warning: this.createSwalMixin(this.successSwalBaseConfig, 'warning')
    },
    warning: {
      success: this.createSwalMixin(this.warningSwalBaseConfig, 'success'),
      primary: this.createSwalMixin(this.warningSwalBaseConfig, 'primary'),
      secondary: this.createSwalMixin(this.warningSwalBaseConfig, 'secondary'),
      info: this.createSwalMixin(this.warningSwalBaseConfig, 'info'),
      error: this.createSwalMixin(this.warningSwalBaseConfig, 'error'),
      warning: this.createSwalMixin(this.warningSwalBaseConfig, 'warning')
      }
  };
  fireSwal(type: 'success' | 'warning', buttonType: keyof typeof this.swalButtonClasses) {
    this.swalMixins[type][buttonType].fire({});
  }

    iconsConfig: SvgIconConfigViewModel = new SvgIconConfigViewModel();

  returnSvgConfig(iconName: string, size?: number, strokeColor?: string){
    return { ...this.iconsConfig, IconName: iconName, Size: size? size : 24, StrokeColor : strokeColor ? strokeColor : 'var(--primary)'}
  }

}
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { MaskitoOptions, MaskitoPostprocessor, MaskitoPreprocessor } from "@maskito/core";

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
    public validInputMessage = 'فیلد معتبر است'
    public requiredInputMessage = 'این فیلد الزامی است'
    public static invalidForm = 'لطفا در تکمیل فرم دقت فرمایید';
    public invalidEmail = 'الگوی ایمیل نامعتبر است';
    public invalidDate = 'الگوی تاریخ نامعتبر است';
    // ==================================================== Swal
    public static successTitle = 'مـوفـق';
    public static successMessage = 'عملیات با موفقت انجام شد.';
    public static errorTitle = 'خطا';
    public static errorMessage = 'متاسفیم؛ در طول انجام عملیات خطایی رخ داد';
    public static warningTitle = 'هشدار';
  


    // ==================================================== PAGINATION
    public static pageSize = 15;
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
  public editTooltip = 'ویرایش';
  public viewTooltip = 'جزئیات'
  public folderTooltip = 'پرونده';
  public removeTooltip = 'حذف'
    public createUser = "ایجاد نام کابری";
    public inquiry = 'استعلام';


    // ==================================================== MASKS
    public dateMask = [/[1]/, /[3-4]/, /[0-9]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/];
    public datePattern = '^1[3-4][0-9]{2}/[0-1][0-9]/[0-3][0-9]$'
    public cardNumberMask = [/[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public ibanMask = ['I', 'R', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    public cellphoneMask = [/[0]/, /[9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    public emailPattern='^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$'  
    public emailMask: MaskitoOptions = {
      mask: /^[\w.%+-]*@?[\w.-]*\.?[a-zA-Z]{0,}$/,
      preprocessors: [
        ({ elementState, data }, actionType) => {
          const { value, selection } = elementState;
        // Allow typing '@' only if not already present and action is insert
        if (data === '@' && !value.includes('@') && actionType === 'insert') {
          return {
            elementState: { value, selection },
            data, // Pass '@' to be handled by the mask
          };
        }
        // Allow other characters to be handled by the mask
        return {
          elementState: { value, selection },
          data: actionType === 'insert' ? data : '',
        };
        },
      ],
      postprocessors: [
        ({ value, selection })  => {
          const trimmedValue = value.trim();
          return { value: trimmedValue, selection };
        },
      ],
    };


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
        height: "130px",
        minHeight: "130px",
        maxHeight: "130px",
        width: "auto",
        minWidth: "0",
        translate: "no",
        sanitize: false,
        enableToolbar: true,
        showToolbar: true,
        toolbarPosition: "top",
        placeholder: "متن مورد نظر خود را در این قسمت بنویسید",
        defaultParagraphSeparator: "div",
        defaultFontName: "Peyda",
        fonts: [
          { class: 'Peyda', name: 'Peyda' },
          { class: 'Kalame', name: 'Kalame' },
          {class: 'YekanBakh', name: 'YekanBakh'},
          {class: 'IranYekan', name: 'IranYekan'},
        
      ],
        rawPaste: false,
        toolbarHiddenButtons: [
          [
            "strikeThrough",
            "subscript",
            "superscript",
            "indent",
            "outdent",
            "heading",
            "undo",
            "redo",
            "customClasses",
            "link",
            "unlink",
            "insertImage",
            "insertVideo",
            "insertHorizontalRule",
            "toggleEditorMode",
          ],
        ],
    };
}
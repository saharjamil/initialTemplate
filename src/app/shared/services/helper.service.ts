import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root',
})
export class HelperService{
 
  constructor() {}

  setToLocalStorage(key:string, val:any) {
    const data = JSON.stringify(val);
    localStorage.setItem(key, data);
  }

  getFromLocalStorage(key:string) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  removeFromLocalStorage(key:string) {
    localStorage.removeItem(key);
  }

  getFileType(fileName: any) {
    const arr = fileName.split('.');
    return arr[arr.length - 1]
  }

  private successSwalBaseConfig = {
    confirmButtonText: 'متوجه شدم',
    buttonsStyling: false,
    focusConfirm: false,
    icon: 'success',
    title: 'عملیات موفق',
    text: 'عملیات با موفقیت انجام شد.'
  };

  private warningSwalBaseConfig = {
    confirmButtonText: 'متوجه شدم',
    buttonsStyling: false,
    focusConfirm: false,
    icon: 'warning',
    title: 'عملیات ناموفق',
    text: 'متاسفیم؛ در طول انجام عملیات خطایی رخ داد'
  };
  
  private swalButtonClasses = {
    success: 'btn btn-success btn-md',
    primary: 'btn btn-primary btn-md',
    secondary: 'btn btn-secondary btn-md',
    info: 'btn btn-info btn-md',
    error: 'btn btn-error btn-md',
    warning: 'btn btn-warning btn-md'
  };
  private swalMixins = {
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
  private successSwalToastConfig = Swal.mixin( {
    background: 'var(--success)',
    color: 'var(--onSuccess)',
    showConfirmButton: false,
    toast: true,
    position: 'bottom-left',
    timer:5000,
  })
  private createSwalMixin(baseConfig: any, buttonType: keyof typeof this.swalButtonClasses) {
    return Swal.mixin({
      ...baseConfig,
      customClass: {
        confirmButton: this.swalButtonClasses[buttonType]
      }
    });
  }
  
  fireSwal(type: 'success' | 'warning', buttonType: keyof typeof this.swalButtonClasses) {
    this.swalMixins[type][buttonType].fire({});
  }

  fireToastSwal(text:string) {
    this.successSwalToastConfig.fire({
      text: text
    })
  }

}

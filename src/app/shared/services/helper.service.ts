import { Injectable } from '@angular/core';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import Swal from 'sweetalert2';
import { AppSetting } from '../../core/resources/app-setting';
import { IExpandablePanelPostion } from '../../core/interfaces/expandable-panel-position.interface';

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

  
  // Button style classes for SweetAlerts
  swalButtonClasses: Record<string, string> = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    success: 'btn btn-success',
    danger: 'btn btn-danger',
    warning: 'btn btn-warning',
    info: 'btn btn-info',
  };
  // Map status to styles
  private getStatusStyles( status: 'success' | 'error' | 'info' | 'warning' | 'primary' | 'secondary' ): { background: string; color: string } {
    const map: Record< string, { background: string; color: string }> = {
      success: { background: 'var(--success)', color: 'var(--onSuccess)' },
      error: { background: 'var(--error)', color: 'var(--onError)' },
      info: { background: 'var(--info)', color: 'var(--onInfo)' },
      warning: { background: 'var(--warning)', color: 'var(--onWarning)' },
      primary: { background: 'var(--primary)', color: 'var(--onPrimary)' },
      secondary: { background: 'var(--secondary)', color: 'var(--onSecondary)' },
    };
    return map[status] || map['primary'];
  }
  // Unified method to show SweetAlert Modal/Toast
  fireSwal(options: {  text?: string; width?:number, timer?:number, title?:string, isToast?: boolean; status?: 'success' | 'error' | 'info' | 'warning' | 'primary' | 'secondary'; buttonType?: 'success' | 'error' | 'info' | 'warning' | 'primary' | 'secondary'}) {
    const { title, text = AppSetting.successMessage, timer, width, isToast = false, status = 'success', buttonType = 'primary'} = options;
    const { background, color } = this.getStatusStyles(status);
    const baseConfig: any = {
      title,
      text,
      width,
      icon: !isToast ? ['success', 'error', 'info', 'warning'].includes(status) ? status : undefined : undefined,
      background: isToast ? background : undefined,
      color: isToast ? color : undefined,
      toast: isToast,
      position: isToast ? 'bottom-left' : 'center',
      showConfirmButton: !isToast,
      confirmButtonText: 'متوجه شــدم',
      timer: timer ? timer : isToast ? 3000 : undefined,
      timerProgressBar: isToast,
      customClass: {
        confirmButton: this.swalButtonClasses[buttonType],
        htmlContainer: isToast ? 'custom-swal-html-container' : '',
        popup: isToast ? 'custom-swal-popup-container' : '',
        timerProgressBar: isToast ? 'custom-swal-time-progress-bar-container' : '',
      }
    };
    const swalInstance = Swal.mixin({ ...baseConfig });
    swalInstance.fire();
  }


  calcMouseEventPosition(event:MouseEvent):DOMRect {
    event.preventDefault(); // Prevent default right-click menu
    const element = event.target as HTMLElement;
    const elementRect = element.getBoundingClientRect();
    return elementRect
  }
  calcRightExpandablePanelPosition(domRect:DOMRect):IExpandablePanelPostion {
    const expandablePanelPosition: IExpandablePanelPostion = {top:domRect.top , left : domRect.left + domRect.width + 5};
    return expandablePanelPosition
  }
  calcLeftExpandablePanelPosition(domRect: DOMRect): IExpandablePanelPostion {
    const expandablePanelPosition: IExpandablePanelPostion = {top:domRect.top , right : window.innerWidth - domRect.right + domRect.width + 5};
    return expandablePanelPosition
  }
  calcBottomExpandablePanelPosition(domRect: DOMRect): IExpandablePanelPostion {
    const expandablePanelPosition: IExpandablePanelPostion = {top:domRect.top + domRect.height + 5 , right :  window.innerWidth - domRect.right};
    return expandablePanelPosition
  }
  calcTopExpandablePanelPosition(domRect: DOMRect): IExpandablePanelPostion {
    const expandablePanelPosition: IExpandablePanelPostion = {bottom:window.innerHeight - domRect.top + 5, right :  window.innerWidth - domRect.right};
    return expandablePanelPosition
  }
}



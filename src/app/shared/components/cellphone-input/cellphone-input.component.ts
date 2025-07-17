import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppSetting } from '../../../core/resources/AppSetting';

@Component({
  selector: 'app-cellphone-input',
  standalone:false,
  templateUrl: './cellphone-input.component.html',
  styleUrl: './cellphone-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CellphoneInputComponent),
      multi: true,
    },
  ],
})
export class CellphoneInputComponent implements ControlValueAccessor {
  setting: AppSetting = new AppSetting();
  submitted: boolean = false;
  constructor(){}
  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}

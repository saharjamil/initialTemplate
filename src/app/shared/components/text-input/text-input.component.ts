import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { AppSetting } from '../../../core/resources/app-setting';
let uniqueIdCounter = 0;
@Component({
  selector: 'app-text-input',
  standalone:false,
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  setting: AppSetting = new AppSetting();
  @Input() iconName: string = '';
  @Input() label: string = '';
  @Input() animatedLabel: boolean = true;
  @Input() placeholder?: string = '';
  @Input() persianLettersOnly: boolean = true;
  @Input() submitted: boolean = false;
  @Input() maskType: 'cellphone' | 'email' | 'none' | 'password' | 'IP' = 'none';
  @Input() isRequired: boolean = true;
  inputId: string = '';
  constructor() {
    this.inputId = `textInput-${uniqueIdCounter++}`;
  }
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
  handleInputChange(val: any) {
    this.value = val;       // update internal value
    this.onChange(val);     // notify Angular form
  }
  setDisabledState?(isDisabled: boolean): void {}
}

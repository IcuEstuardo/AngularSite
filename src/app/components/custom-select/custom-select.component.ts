import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent  implements ControlValueAccessor {

  @Input() label!: string;
  @Input() id!: string;
  @Input() name!: string;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() multiple!: boolean;
  @Input() options!: { label: string, value: any }[];
  @Input() placeholder: string = '';
  @Input() ionChange!: (event: any) => void;
  @Input() ionBlur!: (event: any) => void;
  @Input() ionFocus!: (event: any) => void;
  value: any = '';

  constructor() { }

  onChange!: (value: any) => void;
  onTouched!: () => void;

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Event handlers
  onIonChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.ionChange && this.ionChange(event);
  }

  onIonBlur(event: any) {
    this.onTouched();
    this.ionBlur && this.ionBlur(event);
  }

  onIonFocus(event: any) {
    this.ionFocus && this.ionFocus(event);
  }

}

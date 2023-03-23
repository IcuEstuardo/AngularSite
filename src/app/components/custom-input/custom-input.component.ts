import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent  implements ControlValueAccessor, Validator {

  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() id!: string;
  @Input() name!: string;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() ionChange!: (event: any) => void;
  @Input() ionBlur!: (event: any) => void;
  @Input() ionFocus!: (event: any) => void;
  value: any = '';
  
  constructor() { }

  // ControlValueAccessor methods
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

  // Validator method
  validate() {
    if (this.required && !this.value) {
      return {
        required: true
      };
    }

    return null;
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

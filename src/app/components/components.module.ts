import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    CustomInputComponent,
    CustomSelectComponent,
  ]
})
export class ComponentsModule { }

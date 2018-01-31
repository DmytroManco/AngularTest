import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card.component';
import { ButtonModule } from '../button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    FormCardComponent
  ],
  exports: [FormCardComponent],
})
export class FormCardModule {
}

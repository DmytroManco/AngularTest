import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormViewComponent } from './form-view.component';
import { FormElementsModule } from './form-elements';

@NgModule({
  imports: [
    CommonModule,
    FormElementsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormViewComponent
  ],
  exports: [FormViewComponent],
})
export class FormViewModule {
}

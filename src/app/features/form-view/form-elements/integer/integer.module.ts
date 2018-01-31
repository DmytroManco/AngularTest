import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IntegerComponent } from './integer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    IntegerComponent
  ],
  exports: [IntegerComponent],
})
export class IntegerModule {
}

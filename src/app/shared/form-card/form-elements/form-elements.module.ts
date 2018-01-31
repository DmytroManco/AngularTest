import { NgModule } from '@angular/core';
import { StringModule } from './string';

@NgModule({
  imports: [
    StringModule
  ],
  exports: [
    StringModule
  ],
})
export class FormElementsModule {
}

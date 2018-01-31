import { NgModule } from '@angular/core';
import { FormListModule } from './forms';
import { FormViewModule } from './form-view';

@NgModule({
  imports: [
    FormListModule,
    FormViewModule
  ],
  exports: [
    FormListModule,
    FormViewModule
  ]
})
export class FeaturesModule {
}

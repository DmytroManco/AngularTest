import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { ButtonModule } from './button';
import { FormCardModule } from './form-card';
import { BaseLayoutModule } from './base-layout/';

@NgModule({
  imports: [
    HeaderModule,
    ButtonModule,
    FormCardModule,
    BaseLayoutModule
  ],
  exports: [
    HeaderModule,
    ButtonModule,
    FormCardModule,
    BaseLayoutModule
  ]
})
export class SharedModule {
}

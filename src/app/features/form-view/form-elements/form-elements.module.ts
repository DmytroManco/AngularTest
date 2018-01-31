import { NgModule } from '@angular/core';
import { StringModule } from './string';
import { IntegerModule } from './integer';
import { ListModule } from './list';
import { BoolModule } from './bool';

@NgModule({
  imports: [
    StringModule,
    IntegerModule,
    ListModule,
    BoolModule
  ],
  exports: [
    StringModule,
    IntegerModule,
    ListModule,
    BoolModule
  ],
})
export class FormElementsModule {
}

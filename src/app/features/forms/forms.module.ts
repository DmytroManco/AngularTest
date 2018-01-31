import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent  } from './forms.component';
import { FormCardModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormCardModule
    ],
    declarations: [
      FormsComponent
    ],
    exports: [FormsComponent ],
})
export class FormListModule {
}

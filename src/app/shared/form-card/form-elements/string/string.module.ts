import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringComponent } from './string.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
      StringComponent
    ],
    exports: [StringComponent],
})
export class StringModule {
}

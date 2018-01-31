import { Routes } from '@angular/router';
import { FormViewComponent } from './form-view.component';

export const FormViewRoutes: Routes = [
    {path: 'forms/:id', component: FormViewComponent}
];

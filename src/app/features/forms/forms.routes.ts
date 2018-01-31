import { Routes } from '@angular/router';
import { FormsComponent } from './forms.component';

export const FormListRoutes: Routes = [
    {path: '', component: FormsComponent},
    {path: 'forms', component: FormsComponent}
];

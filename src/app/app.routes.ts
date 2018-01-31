import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { FormListRoutes } from './features/forms';
import { FormViewRoutes } from './features/form-view';

export const ROUTES: Routes = [
  ...FormListRoutes,
  ...FormViewRoutes,
  { path: '**',    component: NoContentComponent },
];

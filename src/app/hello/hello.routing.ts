import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello.component';
import {CountryFormComponent} from "./country-form/country-form.component";

const helloRoutes: Routes = [
  { path: 'countries', component: HelloComponent, pathMatch: 'full' },
  { path: 'countries/new', component: CountryFormComponent},
  { path: 'countries/:id', component: CountryFormComponent}
];

export const helloRouting = RouterModule.forChild(helloRoutes);

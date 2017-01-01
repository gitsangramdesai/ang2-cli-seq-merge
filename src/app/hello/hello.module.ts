import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { HelloComponent } from './hello.component';
import { CountriesService } from './shared/countries.service';
import { CountryFormComponent } from './country-form/country-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    HelloComponent,
    CountryFormComponent
  ],
  exports: [
    HelloComponent
  ],
  providers: [
    CountriesService
  ]
})
export class HelloModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Country } from '../shared/country';
import { CountriesService } from '../shared/countries.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})

export class CountryFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  country: Country = new Country();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {
    this.form = formBuilder.group(
      {
        name: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
       id: ['', [
        ]]
    }
    );
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Country' : 'New Country';

      if (!id)
        return;

      this.countriesService.getCountry(id)
        .subscribe(
          country => this.country = country,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
    countryValue = this.form.value;

    console.log(JSON.stringify(countryValue));
    
    if (countryValue.id){
      result = this.countriesService.updateCountry(countryValue);
    } else {
      result = this.countriesService.addCountry(countryValue);
    }

    result.subscribe(data => this.router.navigate(['countries']));
  }
}

import { Component, OnInit } from '@angular/core';
import {CountriesService} from "./shared/countries.service";
import {Country} from "./shared/country";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {

  private countries: Country[] = [];

  constructor(private countriesService: CountriesService) 
  { 

  }

  ngOnInit() {
    this.countriesService.getCountries()
      .subscribe(data => this.countries = data);
  }

  deleteCountry(country){
    var index = this.countries.indexOf(country);

    if (confirm("Are you sure you want to delete " + country.name + "? " + index)) {
      this.countries.splice(index, 1);
      this.countriesService.deleteCountry(country.id)
        .subscribe(null,
          err => {
            // Revert the view back to its original state
            this.countries.splice(index, 0, country);
          });
    }
  }

}

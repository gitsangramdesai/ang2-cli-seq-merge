import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CountriesService {

  private url: string = "http://localhost:5000/api/country";

  constructor(private http: Http) { 
    
  }

  getCountries(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getCountry(id){
    return this.http.get(this.getCountryUrl(id))
      .map(res => res.json());
  }

  addCountry(country){
     let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.url, JSON.stringify(country),options)
      .map(res => res.json());
  }

  updateCountry(country){
     let headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options  = new RequestOptions({ headers: headers }); // Create a request option

     return this.http.put(this.url, JSON.stringify(country),options)
      .map(res => res.json());
  }

  deleteCountry(id){
    return this.http.delete(this.getCountryUrl(id))
      .map(res => res.json());
  }

  private getCountryUrl(id){
    return this.url + "/" + id;
  }
}

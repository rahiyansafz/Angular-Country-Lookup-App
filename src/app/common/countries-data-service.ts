import { Injectable } from '@angular/core';
import { countriesData } from './countries-data';

@Injectable()
export class CountriesDataService {
  data = countriesData;

  getData() {
    return this.data;
  }

  getCountryNames() {
    return this.data
      .map(row => {
        return {
          "name": row["Name"],
          "code": row["Alpha3Code"]
        }
      })
  }

  getCountryDetails(name) {
    return this.data.find(country => country["Name"].toLowerCase() == name.toLowerCase());
  }
}
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent  {

  countriesList: any = [];
  cList: any = [];
  @Output() countryClick = new EventEmitter();

  addCountryToHistory(countryName) {
    if (this.countriesList.includes(countryName)) {
      this.countriesList.splice(this.countriesList.indexOf(countryName), 1);
    }
    this.countriesList.unshift(countryName);
  }

  add2(countryDet) {
    this.cList = this.cList.filter((country) => {
      return country.name !== countryDet.name;
    });

    let newCountry = Object.assign({}, countryDet, {searchDate: new Date()});
    this.cList.unshift(newCountry);
    console.log(JSON.stringify(this.cList));
  }

  countryClicked(country) {
    this.countryClick.emit(country);
  }
}
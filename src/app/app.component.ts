import { Component, ViewChild } from '@angular/core';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { CountriesDataService } from './common/countries-data-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: any = {};
  @ViewChild(SearchHistoryComponent) 
  private historyComp: SearchHistoryComponent;

  constructor(private conutryService: CountriesDataService) { }

  countrySelected(countryName) {
    this.selectedCountry = this.conutryService.getCountryDetails(countryName.name);
    this.historyComp.addCountryToHistory(countryName.name);
    this.historyComp.add2(countryName);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountryTypeAheadComponent } from './typeahead/typeahead.component';
import { CountriesDataService } from './common/countries-data-service';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { CountryIsoPipe } from './typeahead/country-iso.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, CountryTypeAheadComponent, CountryDetailsComponent, SearchHistoryComponent, CountryIsoPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ CountriesDataService ]
})
export class AppModule { }

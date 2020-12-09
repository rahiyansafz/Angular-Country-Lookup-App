import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CountriesDataService } from '../common/countries-data-service'
import { Observable, Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'country-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class CountryTypeAheadComponent {

  @Input() placeHolderText;
  @Output() countrySelected = new EventEmitter();
  searchText$ = new Subject<string>();
  filtered = [];
  searchString: string = '';

  constructor(private conutryService: CountriesDataService) { }

  ngOnInit() {
    this.searchText$.pipe(
      debounceTime(200),
      // distinctUntilChanged(), commenting this out since this breaks searching same term after it's details have been fetched
      map(term =>
        term.length >= 1 ? this.conutryService.getCountryNames()
          .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10) : [])
    ).subscribe(result => this.filtered = result)
  }

  inputChanged() {
    // this.searchText$.next($event);
    this.searchText$.next(this.searchString);
  }

  countryClicked(index) {
    let selected = this.filtered[index];
    this.searchString = `${selected["name"]} (${selected["code"]})`;
    // this.countrySelected.emit(selected["name"]);
    this.countrySelected.emit(selected);
    this.filtered = [];
  }

  clearClicked() {
    this.searchString = '';
    this.inputChanged();
  }
}

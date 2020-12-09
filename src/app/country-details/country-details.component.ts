import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country;
  
  constructor() { }

  ngOnInit() {
  }

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryIso'
})
export class CountryIsoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value.name} (${value.code})`;
  }

}
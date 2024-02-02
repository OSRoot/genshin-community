import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinute',
  standalone:true
})
export class FormatMinutesPipe implements PipeTransform {
  transform(value: number): string {
    // Check if the value is less than 10, add a leading zero
    return value < 10 ? `0${value}` : `${value}`;
  }
}

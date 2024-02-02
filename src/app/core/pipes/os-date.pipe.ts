import { Pipe, PipeTransform } from '@angular/core';
export enum regions {
  'ar' = 'ar',
  'en' = 'en',
}
interface OsDateOptions {
  showYear?: boolean;
  showMonth?: boolean;
  showDay?: boolean;
}
@Pipe({
  name: 'osDate',
  standalone:true,
  
})
export class OsDatePipe implements PipeTransform {

  transform(value: number | Date,region:regions, options?: OsDateOptions): string {
    const { showYear = true, showMonth = true, showDay = true } = options || {};

    const dateOptions: Intl.DateTimeFormatOptions = { year: showYear ? 'numeric' : undefined, month: showMonth ? 'long' : undefined, day: showDay ? 'numeric' : undefined };

    const date = new Intl.DateTimeFormat(region, dateOptions).format(new Date(value));
    return date;
  }

}

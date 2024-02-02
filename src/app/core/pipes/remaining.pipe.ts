import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {
  transform(nextInvoice: number): number {
    // Convert the next invoice timestamp to a JavaScript Date object
    const nextInvoiceDate = new Date(nextInvoice);

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceMs = nextInvoiceDate.getTime() - currentDate.getTime();

    // Convert milliseconds to days
    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
  }
  }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class ToKHRPipe implements PipeTransform {
  transform(amount: number, rate: number, rounding?: 'up' | 'down'): string {

    const totalAmount = amount * rate;
    let finalAmount = totalAmount;


    if (rounding === 'up') {

      finalAmount = Math.ceil(totalAmount / 100) * 100;

    } else if (rounding === 'down') {

      finalAmount = Math.floor(totalAmount / 100) * 100;

    } else {

      finalAmount = totalAmount;
    }


    return '៛' + finalAmount.toLocaleString();
  }
}

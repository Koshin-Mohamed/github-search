import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let date :any = new Date(today.getMonth(), today.getDate(), today.getFullYear())
      return date;
  }
}
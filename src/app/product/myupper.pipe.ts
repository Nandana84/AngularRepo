import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myupper'
})

export class MyUpperPipe implements PipeTransform {
  transform(value: string): string {
    value = value.toUpperCase();
    return value;
  }
}

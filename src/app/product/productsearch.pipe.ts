import { Pipe, PipeTransform } from '@angular/core';



import {IProduct} from './product.model';
@Pipe({
  name: 'search'
})

export class ProductSearch implements PipeTransform {
  transform(value: IProduct[], userInput: string): IProduct[] {
    userInput = userInput? userInput.toLowerCase() : null;
    return userInput? value.filter((data) =>(data.name.toLowerCase()).indexOf(userInput)!== -1): value;
  }
}

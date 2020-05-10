

import { Component, Input, OnChanges, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  ngOnChanges(){
    console.log(this.rating);

    this.starWidth =  this.rating / 5 * 100;

    // this.starWidth = 90 / 5 * this.rating;
    console.log(this.starWidth);
  }

  onStar(): void{
    this.ratingClicked.emit(`The Rating clicked is ${this.rating}`);
  }

}

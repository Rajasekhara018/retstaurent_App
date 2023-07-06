import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  rating:number = 3;
  countStar:number = 5;
  constructor() { }

  ngOnInit(): void {
  //   onRatingChanged(rating){
  //     console.log(rating);
  //     this.rating = rating;
  // }

}
}

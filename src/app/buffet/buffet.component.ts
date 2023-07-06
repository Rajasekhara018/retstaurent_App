import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffet',
  templateUrl: './buffet.component.html',
  styleUrls: ['./buffet.component.scss']
})
export class BuffetComponent implements OnInit {
  registerDetails: any;
  reviewData: any;
  homeDetails: any;
  starData: any;
  userReview!: boolean;
  tableDetails: any;

  constructor() { }

  ngOnInit(): void {
    // this.registerDetails=JSON.parse(localStorage.getItem('registration'));
    // this.reviewData=JSON.parse(localStorage.getItem('reviewData'));
    // this.homeDetails=JSON.parse(localStorage.getItem('tableRegistered'));
    // this.starData=JSON.parse(localStorage.getItem('StarArray'))
  }
  showReviews(){
    // if(JSON.parse(localStorage.getItem('reviewData')) && JSON.parse(localStorage.getItem('tableRegistered'))){
      console.log("details",this.reviewData[1]);
      // console.log('tableDetails',this.tableDetails[0].hotel)
      if(this.reviewData[1] == "BarbequeNation"){
        console.log("review",this.reviewData);
        console.log(this.reviewData[0].ucomment);
        this.userReview=true;
        return (
          this.reviewData[0] &&
          this.reviewData[1] &&
          this.reviewData[2] &&
          this.starData
        );

      } else{
        return "";

      }

    }
  // }

}

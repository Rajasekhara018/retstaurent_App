import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-veg',
  templateUrl: './pure-veg.component.html',
  styleUrls: ['./pure-veg.component.scss']
})
export class PureVegComponent implements OnInit {
  reviewData: any;
  registerDetails: any;
  homeDetails: any;
  userReview!: boolean;
  tableDetails: any;
  starData: any;

  constructor() { }

  ngOnInit(): void {
    // this.registerDetails=JSON.parse(localStorage.getItem('registration'));
    // this.reviewData=JSON.parse(localStorage.getItem('reviewData'));
    // this.homeDetails=JSON.parse(localStorage.getItem('tableRegistered'));
    // this.tableDetails=JSON.parse(localStorage.getItem('tableRegistered'));
    // this.starData=JSON.parse(localStorage.getItem('StarArray'));

  }
  showReviews(){
    // if(JSON.parse(localStorage.getItem('reviewData')) && JSON.parse(localStorage.getItem('tableRegistered'))){
      console.log("details",this.reviewData[1]);
      // console.log('tableDetails',this.tableDetails[0].hotel)
      if(this.reviewData[1] == "Chuntneys"){
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
  }

// }

import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { registerData } from '../registerData';

@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.scss']
})
export class ABsComponent implements OnInit {
  bookregisterform:any;
  bookReg: registerData;
  bookRegArray = new Array<registerData>()
  tableData: import("/home/akshata/Akshata/WebPage/src/app/tableBookData").tableBookData[];
  registerDetails: any;
  reviewData: any;
  homeDetails: any;
  tableDetails: any;
  constructor(private hservice: HomeServiceService) { }
  Guests: string[]=['none','1','2','3','4','5','6','7','8','9','10'];
  hotels:string[];
  totalAmt='';
  starData:any;
  storeBookReg(formvalue:registerData,){
    // this.snack.open("table booked");
    this.bookRegArray.push(formvalue);
    localStorage.setItem('tableRegistered',JSON.stringify(this.bookRegArray));

  }

  ngOnInit(): void {
    this.bookReg = new registerData();
    this.hservice.getTableBookData()
    .subscribe(data=> this.tableData=data);
    this.registerDetails=JSON.parse(localStorage.getItem('registration'));
    this.reviewData=JSON.parse(localStorage.getItem('reviewData'));
    this.homeDetails=JSON.parse(localStorage.getItem('tableRegistered'));
    this.tableDetails=JSON.parse(localStorage.getItem('tableRegistered'));
   this.starData=JSON.parse(localStorage.getItem('StarArray'))
  }
  userReview=false;
  showReviews(){
    // if(JSON.parse(localStorage.getItem('reviewData')) && JSON.parse(localStorage.getItem('tableRegistered'))){
      // console.log("details",this.reviewData[1]);
      // console.log('tableDetails',this.tableDetails[0].hotel)
      if(this.reviewData[1] === "Abs"){
        console.log("review",this.reviewData);
        console.log("comment",this.reviewData[0].ucomment);
        this.userReview=true;
        return (
          this.reviewData[0] &&

          this.reviewData[2] &&
          this.starData
        );

      } else{
        return "";
      }

      }
  }

// }

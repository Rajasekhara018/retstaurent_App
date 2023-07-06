import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.scss']
})
export class BiryaniComponent implements OnInit {
  registerDetails: any;
  reviewData: any;
  homeDetails: any;
  starData: any;
  userReview: boolean;
  tableDetails: any;

  constructor(private dialog:Dialog) { }
  selected: Date | null;
  gologin(){
    this.dialog.open(LoginComponent);

  }



  ngOnInit(): void {
    this.registerDetails=JSON.parse(localStorage.getItem('registration'));
    this.reviewData=JSON.parse(localStorage.getItem('reviewData'));
    this.homeDetails=JSON.parse(localStorage.getItem('tableRegistered'));
    this.starData=JSON.parse(localStorage.getItem('StarArray'))
  }
  showReviews(){
    if(JSON.parse(localStorage.getItem('reviewData')) && JSON.parse(localStorage.getItem('tableRegistered'))){
      console.log("details",this.reviewData[1]);
      // console.log('tableDetails',this.tableDetails[0].hotel)
      if(this.reviewData[1] == "Mehfil"){
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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exotica',
  templateUrl: './exotica.component.html',
  styleUrls: ['./exotica.component.scss'],
})
export class ExoticaComponent implements OnInit {
  registerDetails: any;
  reviewData: any;
  homeDetails: any;
  starData: any;
  tableDetails: any;
  userReview = false;

  constructor() {}

  ngOnInit(): void {
    // this.registerDetails = JSON.parse(localStorage.getItem('registration'));
    // this.reviewData = JSON.parse(localStorage.getItem('reviewData'));
    // this.homeDetails = JSON.parse(localStorage.getItem('tableRegistered'));
    // this.tableDetails = JSON.parse(localStorage.getItem('tableRegistered'));
    // this.starData = JSON.parse(localStorage.getItem('StarArray'));
  }
  showReviews() {
    if (this.reviewData[1] == 'Exotica') {
      this.userReview = true;
      return (
        this.reviewData[0] &&
        this.reviewData[1] &&
        this.reviewData[2] &&
        this.starData
      );
    } else {
      return '';
    }
  }
}

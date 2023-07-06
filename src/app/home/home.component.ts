import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { homedata, HomeServiceService } from '../home-service.service';
import { registerData } from '../registerData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchInput: string = '';
  places = [
    'Hyderabad',
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Pune',
    'Kolkata',
    'Ahmedabad',
    'Chandigarh',
    'Jaipur',

  ];
  homeLocal!: registerData;
  homeLocalArray = new Array<registerData>;

  // ohris(){
  //   this.rout.navigate(['ohris']);

  // }
  // goAbs(){
  //   this.rout.navigate(['abs']);
  // }
  // gohead(){
  //   this.rout.navigate(['head']);
  // }
  // goamogh(){
  //   this.rout.navigate(['amogham']);
  // }
  // goexotica(){
  //   this.rout.navigate(['exotica']);
  // }
  // gobiryani(){
  //   this.rout.navigate(['biryani']);
  // }
  // gotop(){
  //   this.rout.navigate(['top']);
  // }
  // gobuffet(){
  //   this.rout.navigate(['buffet']);

  // }
  // gopure(){
  //   this.rout.navigate(['pure']);
  // }
  // public restaurant =[];
  public homeButtonData = [];
  starData: any
  reviewData: any

  restaurant = new Array<homedata>();
  tableDetails: any;
  constructor(private rout: Router, public hservice: HomeServiceService, private snack: MatSnackBar) { }
  hotel: any;
  ngOnInit() {


    this.hservice.getHomeData()
      .subscribe(data => this.restaurant = data);
    // this.reviewData =JSON.parse(localStorage.getItem('reviewData'));
    // this.tableDetails = JSON.parse(localStorage.getItem('tableRegistered'))

    // if (JSON.parse(localStorage.getItem('reviewData')) && JSON.parse(localStorage.getItem('tableRegistered'))) {
      console.log("details", this.reviewData[1]);
      console.log('tableDetails', this.tableDetails[0].hotel)
      if (this.reviewData[1] == this.tableDetails[0].hotel) {
        console.log("review", this.reviewData);
        console.log("comment", this.reviewData[0].ucomment);
        return this.reviewData[0].ucomment;

      } else {
        return "";
      }

    // }
    // if(JSON.parse(localStorage.getItem('tableRegistered'))){
    //   console.log('tableDetails',this.tableDetails[0].hotel)
    // }
  }

  goHomeDetails(url: string, data: homedata) {
    this.hservice.restaurantDetail = data;
    this.rout.navigate([url]);



  }





}



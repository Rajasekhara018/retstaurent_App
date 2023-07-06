// import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookRegisterComponent } from '../book-register/book-register.component';
import { homedata, HomeServiceService } from '../home-service.service';
// import{stty}

// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
  // styles:'./src/styles.scss'
})
export class BookTableComponent implements OnInit {
  ohris(){
    this.rout.navigate(['ohris']);

  }
  goAbs(){
    this.rout.navigate(['abs']);
  }
  gohead(){
    this.rout.navigate(['head']);
  }
  goamogh(){
    this.rout.navigate(['amogham']);
  }
  goexotica(){
    this.rout.navigate(['exotica']);
  }
  gobiryani(){
    this.rout.navigate(['biryani']);
  }
  gotop(){
    this.rout.navigate(['top']);
  }
  gobuffet(){
    this.rout.navigate(['buffet']);

  }
  gopure(){
    this.rout.navigate(['pure']);
  }
  // goregister(){
  //   this.dialog.open(BookRegisterComponent);

  // }
  public sData =[];
  public restaurant=[];
  constructor(private rout:Router,private hservice:HomeServiceService) { }

  ngOnInit() {
    // this.hservice.getData()
    // .subscribe(data=> this.sData=data);
    // this.hservice.getHomeData()
    // .subscribe(data=> this.restaurant=data);
  }
  goHomeDetails(data: homedata){

   this.hservice.restaurantDetail = data;
    this.rout.navigate([data.path]);

  }
}



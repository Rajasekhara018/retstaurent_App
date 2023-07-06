import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  reservationDetails: any;

  constructor(private hservice:HomeServiceService,private rout:Router) { }
  goHomeDetails(url:string){
    this.rout.navigate([url]);

  }
  gohome(){
    this.rout.navigate(['home']);
  }
  goReservation(){
    this.rout.navigate(['reservation']);
  }
  goProfile(){
    this.rout.navigate(['profile']);
  }
  goContact(){
    this.rout.navigate(['contact']);
  }
  goBookingHistory(){
    // this.reservationDetails= JSON.parse(localStorage.getItem('tableRegistered'))
    this.rout.navigate(['booking']);
  }
  // getBookingDetails(){
  //   this.reservationDetails= JSON.parse(localStorage.getItem('tableRegistered'))
  // }
  homeButtonData=[];
  ngOnInit(): void {
    this.hservice.getHomeButtonData()
    .subscribe(data => this.homeButtonData =data );
  }

}

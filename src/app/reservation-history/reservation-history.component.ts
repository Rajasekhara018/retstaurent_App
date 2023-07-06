import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { registerData } from '../registerData';

@Component({
  selector: 'app-reservation-history',
  templateUrl: './reservation-history.component.html',
  styleUrls: ['./reservation-history.component.scss']
})
export class ReservationHistoryComponent implements OnInit {
  bookRegArray: any;

  constructor(private snack:MatSnackBar,private rout:Router,public hservice: HomeServiceService,) { }
  reservationDetails:any;
  advanceReservationDetails:any;

  ngOnInit(): void {
    // this.reservationDetails= JSON.parse(localStorage.getItem('tableRegistered'));
    // this.reservationDetails= JSON.parse(localStorage.getItem('advanceDetails'));


  }
  cancelBooking(msg:any,action:any){
    localStorage.removeItem('tableRegistered');
    this.snack.open(msg,action,{duration:400});
    this.rout.navigate(['home'])


  }
  goDineoutPage() {

      this.hservice.PaymentTitle="Advance Pay";
      this.rout.navigate(['dine']);


  }

}

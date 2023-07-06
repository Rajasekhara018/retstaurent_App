import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  reservationDetails: any;
  advanceReservationDetails:any;

  constructor() { }

  ngOnInit(): void {
    // this.reservationDetails= JSON.parse(localStorage.getItem('advanceDetails'));
    this.reservationDetails=JSON.parse(localStorage.getItem('tableRegistered'))
  }

}

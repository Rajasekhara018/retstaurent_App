import { Component, OnInit } from '@angular/core'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { Router } from '@angular/router'
import { ReviewComponent } from '../review/review.component'

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.scss'],
})
export class RecieptComponent implements OnInit {
  reservationDetails: any
  invoice: number = Math.trunc(Math.random() * 24) + 1001
  TranID = Math.trunc(Math.random() * 24) + 14005008001
  hotelName: any;
  constructor(private rout: Router,private bottom:MatBottomSheet) {}
  date = new Date()

  closereceipt() {
    this.rout.navigate(['home']);
    this.bottom.open(ReviewComponent);

  }

  ngOnInit(): void {
    // this.hotelName = JSON.parse(localStorage.getItem('tableRegistered'))
    // this.reservationDetails = JSON.parse(
    //   localStorage.getItem('tableRegistered'),
    // )
  }
}

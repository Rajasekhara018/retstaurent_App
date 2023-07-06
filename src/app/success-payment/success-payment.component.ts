import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.scss']
})
export class SuccessPaymentComponent implements OnInit {
  hotelName: any;

  constructor(private rout:Router) { }

  ngOnInit(): void {
    // this.hotelName = JSON.parse(localStorage.getItem('tableRegistered'));
    setTimeout(()=>{
this.rout.navigate(['reciept']);
    },3000)
  }

}

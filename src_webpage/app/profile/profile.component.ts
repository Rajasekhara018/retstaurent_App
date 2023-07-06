import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

})
export class ProfileComponent implements OnInit {
  panelOpenState = false;
  reservationDetails:any;
  registrationData:any;
  constructor() { }

  ngOnInit(): void {
    this.reservationDetails= JSON.parse(localStorage.getItem('tableRegistered'));
    this.registrationData = JSON.parse(localStorage.getItem('registration'));
  }

}
function rgb(arg0: number, arg1: number, arg2: number): string | number {
  throw new Error('Function not implemented.');
}


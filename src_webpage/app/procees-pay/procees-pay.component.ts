import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procees-pay',
  templateUrl: './procees-pay.component.html',
  styleUrls: ['./procees-pay.component.scss'],
})
export class ProceesPayComponent implements OnInit {
  hotelName: any;

  constructor(private rout: Router) {}

  ngOnInit(): void {
    this.hotelName = JSON.parse(localStorage.getItem('tableRegistered'));
    setTimeout(() => {
      this.rout.navigate(['success']);
    }, 3000);
  }
}

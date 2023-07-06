import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  places=[
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
  constructor() { }

  ngOnInit(): void {
  }

}

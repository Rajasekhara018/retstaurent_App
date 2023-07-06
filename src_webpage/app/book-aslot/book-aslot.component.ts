import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-aslot',
  templateUrl: './book-aslot.component.html',
  styleUrls: ['./book-aslot.component.scss']
})
export class BookASlotComponent implements OnInit {
  BookAEvent:any;
  eventObj:bookEvent;

  typeOfEvents=[
    "BirthDay Celebrations",
    "Wedding ",
    "Engagement ",
    "Team Outing/party",
    "Get Together",
    "Corporate Event"

  ];
  timings=[
    "7:00am-10:00am(morning)",
    "4:00am-3:30pm(afternoon)",
    "4:00pm-7:00pm(evening)",
    "7:00pm-11:30pm(late evening)",
    "9:00am-6:30pm(full day)"
  ];

  budget=[
    "500",
    "500-600",
    "600-700",
    "750-1000",
    "above 1000"
  ];

  people=[
    "50",
    "70",
    "50-100",
    "500-1000"
  ];

  typeOfFood=[
    "Veg",
    "Non-Veg",
    "Both Veg and non-Veg"
  ];

  venue=[
    "Ohris",
    "HeadQuaters",
    "Amogham",
    "Exotica",
    "Chutneys"

  ]
foodType="typeOfFood";

  minDate= new Date();
  // maxDate=new Date(new Date().getTime()+((24*60*60*1000)));

  eventArray=[];

  constructor() { }

  ngOnInit(): void {
    this.eventObj=new bookEvent();
  }

  storeVenueData(formvalue:bookEvent){
    // this.eventArray.push(formvalue);
    this.eventArray.push(formvalue);
localStorage.setItem('event_data',JSON.stringify(this.eventArray));

  }




}
class bookEvent{
  noOfGuests:string;
  hotelName:string;
  date:string;
  time:string;
  food:string;
  event:string;
  buget:string;

}

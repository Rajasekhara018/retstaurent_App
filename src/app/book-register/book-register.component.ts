import { Component, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { HomeServiceService } from '../home-service.service'
import { homeButtomData } from '../homeButtomData'
import { registerData } from '../registerData'

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.scss'],
})
export class BookRegisterComponent implements OnInit {
  selected!: Date | null
  select!: Date | null
  bookregisterform: any
  bookReg!: registerData
  bookRegArray = new Array<registerData>()
  // tableData!: import('/home/akshata/Akshata/WebPage/src/app/tableBookData').tableBookData[]

  gologin() {
    this.rout.navigate(['login'])
  }
  constructor(
    private rout: Router,
    private snack: MatSnackBar,
    public hservice: HomeServiceService,
  ) {}
  Guests: string[] = ['none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  hotels!: string[]
  totalAmt = ''

  storeBookReg(formvalue: registerData,msg:string,action:string) {
    formvalue.hotel = this.hservice.restaurantDetail.rname;
    formvalue.img = this.hservice.restaurantDetail.img;
    formvalue.price = this.hservice.restaurantDetail.price;
    formvalue.id = this.hservice.restaurantDetail.id;
    formvalue.order=this.hservice.restaurantDetail.order;
    // formvalue.location=this.hservice.restaurantDetail.location;
    formvalue.location=this.hservice.restaurantDetail.location;



    // this.snack.open("table booked");
    this.bookRegArray.push(formvalue)
    localStorage.setItem('tableRegistered', JSON.stringify(this.bookRegArray));
    // localStorage.setItem('advancePayDetails', JSON.stringify(this.bookRegArray))
    this.rout.navigate(['reservation']);
    this.snack.open(msg,action,{duration:4000})


  }

  ngOnInit(): void {
    this.bookReg = new registerData()
    // this.hservice
    //   .getTableBookData()
    //   .subscribe((data) => (this.tableData = data))
  }
  // goAdvance(formvalue: registerData) {
  //   this.bookRegArray.push(formvalue)
  //   formvalue.hotel = this.hservice.restaurantDetail.rname;
  //   formvalue.price = this.hservice.restaurantDetail.price;
  //   formvalue.img = this.hservice.restaurantDetail.img;
  //   formvalue.location=this.hservice.restaurantDetail.location;
  //   formvalue.order = this.hservice.restaurantDetail.order;


  //   localStorage.setItem('advanceDetails', JSON.stringify(this.bookRegArray))
  //   this.rout.navigate(['advance'])
  // }
}

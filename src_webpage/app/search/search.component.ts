import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
// enterValue:string='';
value = '';
searchData=[];
  constructor(public hservice:HomeServiceService,public rout:Router) { }

  ngOnInit(): void {
    // this.hservice.getHomeData().subscribe(data =>
    //   {
    //     this.searchData=data;
    //   })
  }
//   @Output()
// sChangeText:EventEmitter<string> = new EventEmitter<string>();
// onSearch(){
//   this.sChangeText.emit(this.enterValue)
//   // if(this.enterValue != '' ){
//   //   this.sChangeText.emit(this.enterValue)
//   // }
//   // else{

//   //   alert("something went wrong")
//   // }
// }
// search(home:string)
// {
//   // this.hservice.onSearchTextChange(home, this.searchData);
//   // this.rout.navigate(['home']);

// }
}

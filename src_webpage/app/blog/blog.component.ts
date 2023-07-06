import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private hservice:HomeServiceService,private rout :Router) { }
   public Blog=[];
  ngOnInit(): void {
    this.hservice.getData()
    .subscribe(data=> this.Blog=data);
  }
  goToBlogDetails(url:string){
    this.rout.navigate([url]);

  }
  tSearch:string="";
  sTextEnter(sValue:string){
    this.tSearch = sValue;

  }
  // enterValue:string="";
  // @Output()
  // sChangeText:EventEmitter<string> = new EventEmitter<string>();
  // onSearch(){
  //   this.sChangeText.emit(this.enterValue)
  // }
}

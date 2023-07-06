import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
 export class BlogData{
  title:string;
  content:string;
  authorname:string;
 }
@Component({
  selector: 'app-blog-event',
  templateUrl: './blog-event.component.html',
  styleUrls: ['./blog-event.component.scss']
})
export class BlogEventComponent implements OnInit {
BlogForm:any;
blog:BlogData;
blogArray = new Array<BlogData>()
b:any;

  constructor(private hservice:HomeServiceService,private rout :Router,private dialog:Dialog ) { }
  public restaurant =[];
  ngOnInit(): void {
    this.hservice.getHomeData()
    .subscribe(data=> this.restaurant=data);

    this.blog=new BlogData();

    // this.b =  localStorage.getItem(JSON.parse('bloglocal'));
    this.b = JSON.parse(localStorage.getItem('bloglocal'));
    console.log(this.b);
  }
  goHomeDetails(url:string){
    this.rout.navigate([url]);

  }
  storeBlogData(formvalue : BlogData){
    this.blogArray.push(formvalue)
    localStorage.setItem('bloglocal',JSON.stringify(this.blogArray));
    this.dialog.closeAll();

  }
  close(){
    this.dialog.closeAll();
  }

}

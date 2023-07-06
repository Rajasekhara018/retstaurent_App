import { animate, state, style, transition, trigger } from '@angular/animations'
// import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core'
import { Route, Router } from '@angular/router'
import { BlogEventComponent } from '../blog-event/blog-event.component'
import { blogWriteData, HomeServiceService } from '../home-service.service'
// export class BlogData{
//   title:string;
//   content:string;
//   authorname:string;
//  }
export class dataBlog {
  title!: string
  content!: string
  authorname!: string
}
@Component({
  selector: 'app-blog-write',
  templateUrl: './blog-write.component.html',
  styleUrls: ['./blog-write.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          // color: 'black',
          color:'red'

        }),
      ),
      state(
        'closed',
        style({
          color: 'black',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class BlogWriteComponent implements OnInit {
  BlogForm: any
  blog!: dataBlog
  blogArray = new Array<dataBlog>()
  public Blog = []
  blo: any
  blogWriteDetails = new Array<blogWriteData>()
  registerDetails:any;
  reviewData:any;
  homeDetails: any

  constructor(
    
    public hservice: HomeServiceService,
    private rout: Router,
  ) {}
  ngOnInit(): void {
    this.hservice
      .getBlogWriteData()
      .subscribe((data) => (this.blogWriteDetails = data))
    // this.blo = JSON.parse(localStorage.getItem('bloglocal'));
    // this.registerDetails=JSON.parse(localStorage.getItem('registration'));
    // this.reviewData=JSON.parse(localStorage.getItem('review_Data'));
    // this.homeDetails=JSON.parse(localStorage.getItem('tableRegistered'));


  }
  storeBlogData(formvalue: dataBlog) {
    // this.blogArray.push(formvalue)
    // localStorage.setItem('bloglocal',JSON.stringify(this.blogArray))
  }
  gotoBlogEvent() {
    // this.dialog.open(BlogEventComponent)
    // this.dialog.
  }
  isOpen = true
  readMoredetails(url: string) {
    this.rout.navigate([url])
    // this.isOpen = !this.isOpen
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

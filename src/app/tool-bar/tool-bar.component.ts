// import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookRegisterComponent } from '../book-register/book-register.component';
import { homedata, HomeServiceService } from '../home-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  // restaurant: import("/home/akshata/Akshata/WebPage/src/app/home-service.service").homedata[];
  // restaurant: import("/home/akshata/Akshata/WebPage/src/app/home-service.service").homedata[];
sitedata=new Array<homedata>();
  constructor(private rout:Router,public hservice:HomeServiceService) { }
  gohome(){
this.rout.navigate(['/home']);
  }

  gobook(){
    this.rout.navigate(['book']);
  }
  goblog(){
    this.rout.navigate(['blog']);
  }
  goblogevent(){
    this.rout.navigate(['blogevent']);
  }
  goblogwrite(){
    this.rout.navigate(['blogwrite']);
  }
  goDineOut(){
    this.rout.navigate(['dine']);
  }
  goregister(){
    // this.dialog.open(BookRegisterComponent);

  }
  goHomeDetails(url:string){
    this.rout.navigate([url]);

  }
  goSidenav(){
    this.rout.navigate(['sidenav']);
  }
  // const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  //   this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  gologin(){
    // this.dialog.open(LoginComponent);
    // localStorage.setItem('loggedIn', 'true');
    // this.isLoggedIn$.next(true);
    this.hservice.IsUserlog=true;
    this.rout.navigate(['login']);

  }
  Selected!:boolean;
  colorChange(){
    this.Selected= !this.Selected;
  }

  gologout(){
    this.hservice.IsUserlog = false;
    this.sitedata.length=0;

  }
  tSearch:string="";
  lSearch:string="";
  sTextEnter(sValue:string){
    this.tSearch = sValue;
    // this.lSearch = locate;
  }
  homeButtonData=[];
  ngOnInit(): void {

  }

  PaymentTitleDine(){
    this.hservice.PaymentTitle="DineOut Pay";
    this.rout.navigate(['dine']);
  }

}

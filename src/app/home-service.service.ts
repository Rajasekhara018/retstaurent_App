import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Route, Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'
// import { homedata } from './homedata';
// import{searchInterInterface} from './searchInter'
import { homeButtomData } from './homeButtomData'
import { tableBookData } from './tableBookData'
@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  searchData!: homedata[]
  isSearchResFound!: boolean
  restaurantDetail = new homedata()
  sidebuttondeatils = new homeButtomData()
  // searchInput: string = ''
  IsUserlog!:boolean;
  // public isLoggedIn$: BehaviorSubject<boolean>;


  searchPipe = new Array<any>();

  constructor(private http: HttpClient,private rout:Router) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    // this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }
  // private _url ="/home/akshata/Akshata/WebPage/src/assets/Blog.json";
  private _url = './assets/Blog.json';
  private homeurl = './assets/restaurant.json';
  private homeButton = './assets/HomeButton.json';
  private tableBook = './assets/tablebooking.json';
  private blogWriteDataurl='./assets/blogWriteData.json';

  DineoutPayData = '';
  // JSON.parse(localStorage.getItem('tableRegistered'));

  title ="";
  price = "";
  guests="";
  img = "";
  PaymentTitle!:string;


  DineoutPayCheckoutDetails(){
    if(this.DineoutPayData){
      console.log(this.DineoutPayData);
      this.title = "Dineout Pay";
      // this.price = this.DineoutPayData.price;
      // this.guests = this.DineoutPayData.guests;
      // this.img = this.DineoutPayData.img;
    }else{
      // if(JSON.parse(localStorage.getItem('advancePayDetails')))
      console.log('advance working')
      this.title = "Advance Pay";
      // this.price = this.DineoutPayData.price;
      // this.guests = this.DineoutPayData.guests;
      // this.img = this.DineoutPayData.img;

  }
}



  getData(): Observable<BlogData[]> {
    return this.http.get<BlogData[]>(this._url)
  }
  getHomeData(): Observable<homedata[]> {
    return this.http.get<homedata[]>(this.homeurl)
  }
  getHomeButtonData(): Observable<homeButtomData[]> {
    return this.http.get<homeButtomData[]>(this.homeButton)
  }
  getTableBookData(): Observable<tableBookData[]> {
    return this.http.get<tableBookData[]>(this.tableBook)
  }
  getBlogWriteData():Observable<blogWriteData[]>{
    return this.http.get<blogWriteData[]>(this.blogWriteDataurl)

  }
  // login() {
  //   // logic
  //   localStorage.setItem('loggedIn', 'true');
  //   this.isLoggedIn$.next(true);
  //   this.rout.navigate(['home']);

  // }

  // logout() {
  //   // logic
  //   localStorage.setItem('loggedIn', 'false');
  //   this.rout.navigate(['login'])
  //   this.isLoggedIn$.next(false);
  // }


}
export class BlogData {
  title!: string
  date!: string
  imgurl!: string
}
export class homedata {
  rname!: string
  location!: string
  img!: string
  path!: string
  price!: string
  cuisine!: string
  id!:string
  order!:string
}
export class blogWriteData{
  imgpath!:string;
  title!:string;
  date!:string;
  content!:string;
  path!:string;
}
export class advanceData{
  cardNumber!:string;
  nameOnCard!:string;
  validDate!:string;
  cvv!:string;

}
export class netbankData{
  selectBank!:string;
}
export class UpiData{
  upiId!:string;
}
export class netLoginData{
  nUsername!:string;
  nPassword!:string;

}
export class walletData{
  wPhone!:string;
}

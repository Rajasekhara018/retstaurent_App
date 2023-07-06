import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABsComponent } from './abs/abs.component';
import { AdvancePayComponent } from './advance-pay/advance-pay.component';
import { AmoghamComponent } from './amogham/amogham.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { BlogEventComponent } from './blog-event/blog-event.component';
import { BlogWriteComponent } from './blog-write/blog-write.component';
import { BlogComponent } from './blog/blog.component';
import { BookASlotComponent } from './book-aslot/book-aslot.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BuffetComponent } from './buffet/buffet.component';
import { CharityComponent } from './charity/charity.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DineoutPageComponent } from './dineout-page/dineout-page.component';
import { ExoticaComponent } from './exotica/exotica.component';
import { FoodTastingComponent } from './food-tasting/food-tasting.component';
import { HeadQuatersComponent } from './head-quaters/head-quaters.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LiveMusicComponent } from './live-music/live-music.component';
import { LoginComponent } from './login/login.component';
import { MomComponent } from './mom/mom.component';
import { NetBankLoginComponent } from './net-bank-login/net-bank-login.component';
import { NomNOmComponent } from './nom-nom/nom-nom.component';
import { OhrisComponent } from './ohris/ohris.component';
import { OpenAirComponent } from './open-air/open-air.component';
import { PetComponent } from './pet/pet.component';
import { ProceesPayComponent } from './procees-pay/procees-pay.component';
import { ProfileComponent } from './profile/profile.component';
import { PureVegComponent } from './pure-veg/pure-veg.component';
import { RecieptComponent } from './reciept/reciept.component';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';
import { ReviewComponent } from './review/review.component';
import { RoyalEnComponent } from './royal-en/royal-en.component';
import { SalesComponent } from './sales/sales.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { TopTrendingComponent } from './top-trending/top-trending.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'',redirectTo:'tool',pathMatch:"full"},
  // {path:'tool',component:ToolBarComponent},
  {path:'home',component:HomeComponent},
  {path:'ohris',component:OhrisComponent},
  {path:'abs',component:ABsComponent},
  {path:'head',component:HeadQuatersComponent},
  {path:'amogham',component:AmoghamComponent},
  {path:'exotica',component:ExoticaComponent},
  {path:'biryani',component:BiryaniComponent},
  {path:'pure',component:PureVegComponent},
  {path:'top',component:TopTrendingComponent},
  {path:'buffet',component:BuffetComponent},
  {path:'login',component:LoginComponent},
  {path:'book',component:BookTableComponent},
  {path:'blog',component:BlogComponent},
  {path:'royal',component:RoyalEnComponent},
  {path:'south',component:SouthIndianComponent},
  {path:'sales',component:SalesComponent},
  {path:'charity',component:CharityComponent},
  {path:'live',component:LiveMusicComponent},
  {path:'food',component:FoodTastingComponent},
  {path:'blogevent',component:BlogEventComponent},
  {path:'blogwrite',component:BlogWriteComponent},
  {path:'dine',component:DineoutPageComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'login',component:LoginComponent},
  {path:'advance',component:AdvancePayComponent},
  {path:'reservation',component:ReservationHistoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'booking',component:BookingHistoryComponent},
  {path:'mom',component:MomComponent},
  {path:'open',component:OpenAirComponent},
  {path:'pet',component:PetComponent},
  {path:'nom',component:NomNOmComponent},
  {path:'cocktails',component:CocktailsComponent},
  {path:'health',component:HealthComponent},
  {path:'review',component:ReviewComponent},
  {path:'process',component:ProceesPayComponent},
  {path:'success',component:SuccessPaymentComponent},
  {path:'reciept',component:RecieptComponent},
  {path:"netLogin",component:NetBankLoginComponent},
  {path:"slot",component:BookASlotComponent}


  // {path:'**',redirectTo:'/home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

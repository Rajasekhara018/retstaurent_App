import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// import { GoogleMap, GoogleMapsModule } from '@angular/google-maps'

import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OhrisComponent } from './ohris/ohris.component';
import { ABsComponent } from './abs/abs.component';
import { HeadQuatersComponent } from './head-quaters/head-quaters.component';
import { AmoghamComponent } from './amogham/amogham.component';
import { ExoticaComponent } from './exotica/exotica.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { TopTrendingComponent } from './top-trending/top-trending.component';
import { BuffetComponent } from './buffet/buffet.component';
import { PureVegComponent } from './pure-veg/pure-veg.component';
import { HttpClientModule } from '@angular/common/http';
import { BookRegisterComponent } from './book-register/book-register.component';
import { SearchComponent } from './search/search.component';
import { BlogComponent } from './blog/blog.component';
import { HomeServiceService } from './home-service.service';
import { RoyalEnComponent } from './royal-en/royal-en.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { SalesComponent } from './sales/sales.component';
import { CharityComponent } from './charity/charity.component';
import { LiveMusicComponent } from './live-music/live-music.component';
import { FoodTastingComponent } from './food-tasting/food-tasting.component';
import { BlogEventComponent } from './blog-event/blog-event.component';
import { BlogWriteComponent } from './blog-write/blog-write.component';
import { DineoutPageComponent } from './dineout-page/dineout-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdvancePayComponent } from './advance-pay/advance-pay.component';
import { SearchPipe } from './search.pipe';
import { ReservationHistoryComponent } from './reservation-history/reservation-history.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ImageUploadPracticeComponent } from './image-upload-practice/image-upload-practice.component';
import { MomComponent } from './mom/mom.component';
import { OpenAirComponent } from './open-air/open-air.component';
import { PetComponent } from './pet/pet.component';
import { NomNOmComponent } from './nom-nom/nom-nom.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { HealthComponent } from './health/health.component';
import { ReviewComponent } from './review/review.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
// import "~@coreui/coreui-pro/scss/coreui";
// import{"@coreui/coreui"}
// import { CarouselModule } from '@coreui/angular';
import { ProceesPayComponent } from './procees-pay/procees-pay.component';
import { RecieptComponent } from './reciept/reciept.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { NetBankLoginComponent } from './net-bank-login/net-bank-login.component';
import { ReviewBottomSheetComponent } from './review-bottom-sheet/review-bottom-sheet.component';
import { BookASlotComponent } from './book-aslot/book-aslot.component';
// import * as i19 from "@coreui/icons-angular";
// import {} from 'googlemaps';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolBarComponent,
    HomeComponent,
    PracticeComponent,
    BookTableComponent,
    OhrisComponent,
    ABsComponent,
    HeadQuatersComponent,
    AmoghamComponent,
    ExoticaComponent,
    BiryaniComponent,
    TopTrendingComponent,
    BuffetComponent,
    PureVegComponent,
    BookRegisterComponent,
    SearchComponent,
    BlogComponent,
    RoyalEnComponent,
    SouthIndianComponent,
    SalesComponent,
    CharityComponent,
    LiveMusicComponent,
    FoodTastingComponent,
    BlogEventComponent,
    BlogWriteComponent,
    DineoutPageComponent,
    SidenavComponent,
    AdvancePayComponent,
    SearchPipe,
    ReservationHistoryComponent,
    ProfileComponent,
    ContactUsComponent,
    BookingHistoryComponent,
    ImageUploadPracticeComponent,
    MomComponent,
    OpenAirComponent,
    PetComponent,
    NomNOmComponent,
    CocktailsComponent,
    HealthComponent,
    ReviewComponent,
    StarRatingComponent,
    ProceesPayComponent,
    RecieptComponent,
    SuccessPaymentComponent,
    NetBankLoginComponent,
    ReviewBottomSheetComponent,
    BookASlotComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    // CarouselModule,
    // GoogleMapsModule,
    // GoogleMap


  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

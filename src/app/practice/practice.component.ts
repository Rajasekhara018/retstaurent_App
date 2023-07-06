import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';
import { homedata } from '../home-service.service';
// import {} from 'googlemaps';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {

  zoom = 12;
  // center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'hybrid',
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   maxZoom: 15,
  //   minZoom: 8,
  // };
  constructor(public snack: MatSnackBar, public hservice: HomeServiceService,private rout:Router) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      // this.center = {
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude,
      // };
    });
  }
  // zoomIn() {
  //   if (this.zoom < this.options.maxZoom) this.zoom++;
  // }
  // zoomOut() {
  //   if (this.zoom > this.options.minZoom) this.zoom--;
  // }
}

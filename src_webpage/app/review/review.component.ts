import { Component, OnInit } from '@angular/core'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { HomeServiceService } from '../home-service.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  reviewForm: any
  reviewObj: reviewData
  reviewArray = new Array<reviewData>()
  registrationDetails: any
  // stars: number[] = [1, 2, 3, 4, 5]
  selectedValue: number
  homeDetails: any

  rating: number = 1

  countStar: number = 5
  ratingArray: any = []
  ratingUpdated: any
  starDetails = []
  hotel: any
  comment: any
  getStar: any

  constructor(
    public hservice: HomeServiceService,
    private bottom: MatBottomSheet,
  ) {
    // console.log(this.countStar)
    // this.ratingArray = Array(this.countStar).fill(false)
  }
  closeREviewBottom(event: MouseEvent) {
    this.bottom.dismiss()
    event.preventDefault()
  }
  ngOnInit(): void {
    this.reviewObj = new reviewData()
    this.registrationDetails = JSON.parse(localStorage.getItem('registration'))
    this.homeDetails = JSON.parse(localStorage.getItem('tableRegistered'))
    this.ratingArray = Array(this.countStar).fill(false)
    this.hotel = this.hservice.restaurantDetail.rname
    this.getStar = JSON.parse(localStorage.getItem('StarArray'))
  }

  goToStorage(event: MouseEvent) {
    this.reviewArray.push(
      this.registrationDetails[0].uname,
      this.hotel,
      this.comment,
    )

    localStorage.setItem('reviewData', JSON.stringify(this.reviewArray))
    this.bottom.dismiss()
    event.preventDefault()
  }

  onclick(i: number) {
    debugger

    this.rating = i + 1

    this.starDetails.push(i)

    localStorage.setItem('StarArray', JSON.stringify(i))
  }
  showIcon(index: number) {
    debugger
    if (this.rating >= index + 1) {
      return 'star'
    } else {
      return 'star_border'
    }
  }


}
class reviewData {
  comment: any
  hotelname: any
}

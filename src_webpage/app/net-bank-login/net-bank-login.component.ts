import { Component, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { netLoginData } from '../home-service.service'

@Component({
  selector: 'app-net-bank-login',
  templateUrl: './net-bank-login.component.html',
  styleUrls: ['./net-bank-login.component.scss'],
})
export class NetBankLoginComponent implements OnInit {
  NetLoginForm: any

  netDataArray = [{ username: 'Akshata', password: 'Password' },
  { username: 'Vanitha', password: 'Password' },
  { username: 'Jaharika', password: 'Password' },
  { username: 'Arnav', password: 'Password' },


]
  netDataArray2 = []

  netLObj: netLoginData
  uEmail: any

  constructor(private rout: Router, private snack:MatSnackBar) {}
  username: string
  Password: string

  CrossNet(msg:string,action:string,formvalue: netLoginData) {

    for (let i = 0; i <= this.netDataArray.length; i++) {
      if (
        this.netDataArray[i].username == this.netLObj.nUsername &&
        this.netDataArray[i].password == this.netLObj.nPassword
      ) {
        this.snack.open(msg,action,{duration:3000})
        this.rout.navigate(['process'])

      } else{
        this.snack.open('Invalid Credentials','dismiss',{duration:3000})
      }
    }

  }
  ngOnInit(): void {
    this.netLObj = new netLoginData()

  }
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
export class LoginFormData {
  name!:string ;
  phone!:string;
  email!:string ;
  password!:string ;
  email1!:string ;
  password1!:string ;
  gender!:string;
  length!: number;
}
export class loginLocal{
  email!:string;
  password!:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  RegisterForm: any
  UserSubmit!: false
  LoginForm:any
  frm!: LoginFormData
  frmlogin!:loginLocal

  toolData = false
  formArray = new Array<LoginFormData>()
  loginArray = new Array<loginLocal>()
  // formArray:[]

  constructor(private snack: MatSnackBar, private rout: Router,private location:Location) {}

  Gender: string = ''
  genders: string[] = ['Female', 'Male', 'other']

  ngOnInit(): void {
    this.frm = new LoginFormData();
    this.frmlogin = new loginLocal();
  }

  regdata!: []
  store(msg: string, action: string, formvalue: LoginFormData) {


    this.formArray.push(formvalue)
    localStorage.setItem('registration', JSON.stringify(this.formArray))
    this.snack.open(msg, action, { duration: 3000 })

  }


  uEmail!: string
  uPassword!: string
  loginCall(msg: string, action: string,formvalue:loginLocal) {
    let data = new Array();
    // JSON.parse(localStorage.getItem('registration'))
    if (data?.length > 0) {
      data.forEach((element: any) => {
        if (
          this.uEmail === element.uemail &&
          this.uPassword === element.upassword
        ) {
          // if(element.email===this.uEmail && element.password === this.uPassword)

          this.snack.open(msg, action, { duration: 3000 })
          this.rout.navigate(['home'])
          console.log(this.uEmail);
          // this.loginArray.push(formvalue);
          // localStorage.setItem('login',JSON.stringify(this.loginArray))
        } else {
          this.snack.open('Invalid Credentials', 'dismiss', { duration: 3000 })
          // this.snack.open(msg, action)
          // this.rout.navigate(['/home']);
        }
      })
    }
  }
}

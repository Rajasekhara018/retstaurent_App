import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { advanceData, HomeServiceService, netbankData, netLoginData, UpiData, walletData } from '../home-service.service';
// export class advanceData{
//   cardNumber:string;
//   nameOnCard:string;
//   validDate:string;
//   cvv:string;

// }

@Component({
  selector: 'app-advance-pay',
  templateUrl: './advance-pay.component.html',
  styleUrls: ['./advance-pay.component.scss']
})
export class AdvancePayComponent implements OnInit {
  AdvancePayForm:any;
  adObj: advanceData;
  // carddetailsArray=[];
  // valid=new Date();
  valid1:any;

  hotelName:any;
  tableData = [];

  hide = true;

  // AdvancePayForm: any;
  NetBankForm: any;
  UpiForm: any;
  Wallet: any;

  // adObj: advanceData;
  netObj: netbankData;
  upiObj: UpiData;
  walletObj: walletData;
  netLObj: netLoginData;

  // carddetailsArray = [];
  netBankArray = [];
  upiArray = [];
  walletsArray = [];

  // valid1: any;

  // hotelName: any;
  // tableData = [];
  cardImg: any;

  netBValue: string;  pattern="^\d{10}$"
  maxlength="10"

  carddetailsArray = [
    {
      cNum: '3456789123456678',
      cValid: '04/27',
      cCvv: '123',
      cName: 'Akshata',
    },
    {
      cNum: '4556677889911223',
      cValid: '04/27',
      cCvv: '234',
      cName: 'Amaravathi',
    },
    { cNum: '5522334455667788', cValid: '03/27', cCvv: '567', cName: 'Arnav' },
    {
      cNum: '6666666666666666',
      cValid: '10/22',
      cCvv: '890',
      cName: 'Vanitha',
    },
    {
      cNum: '3333333333333333',
      cValid: '12/25',
      cCvv: '023',
      cName: 'Jaharika',
    },
  ];
  netDataArray = [
    { username: 'Akshata', password: 'Password' },
    { username: 'Hermonie', password: 'Password' },
    { username: 'thriveni', password: 'Password' },
    { username: 'Arnav', password: 'Password' },
  ];
  UpiArrayData = [
    { upiId: 'akshata@oksbi' },
    { upiId: 'akshata@ybl' },
    { upiId: 'akshata@ibl' },
    { upiId: 'akshata@axl' },
  ];

  WalletArrayData = [
    { phoneNo: '6767876787' },
    { phoneNo: '6666666666' },
    { phoneNo: '3333333333' },
    { phoneNo: '9999999999' },
  ];

  errorMessage: boolean;
  pageTab = true;
  pageProcess: boolean;
  pageSucess: boolean;
  pageNetBank: boolean;
  pageNetTab=true;
  pageWalletTab = true;
  pageWallet:boolean;
  pageFooterImage:boolean;


  upiValue: string;
  walletValue: string;

  constructor(private hservice : HomeServiceService,private snack: MatSnackBar,private rout:Router) { }
  // storeCardDetails(msg:any,action:string,formvalue:advanceData){
  //   this.carddetailsArray.push(formvalue);
  //   localStorage.setItem('cardData',JSON.stringify(this.carddetailsArray));
  //   this.snack.open(msg,action,{duration : 3000});
  //   this.rout.navigate(['home']);
  // }
  storeCardDetails(msg: any, action: string, formvalue: advanceData) {
    this.pageTab = false;
    this.pageProcess = true;
    // this.pageSucess=true;
    this.pageFooterImage = true;
    setTimeout(() => {
      if (
        this.adObj.cardNumber &&
        this.adObj.cvv &&
        this.adObj.nameOnCard &&
        this.adObj.validDate
      ) {
        this.carddetailsArray.filter((cd) => {
          if (
            cd.cNum == this.adObj.cardNumber &&
            cd.cCvv == this.adObj.cvv &&
            cd.cName == this.adObj.nameOnCard &&
            cd.cValid == this.adObj.validDate
          ) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageSucess = true;
            this.pageFooterImage = true;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
          this.pageFooterImage = true;
        }
      }
    }, 2000);
  }
  storeNetBAnkDetails(val: string) {
    this.netBankArray.push(val);
    localStorage.setItem('netBankDetails', JSON.stringify(this.netBankArray));
    this.pageTab = true;
    this.pageNetTab = false;
    this.pageNetBank = true;
    this.pageFooterImage = false;
    // this.showProcessPage();
    // this.rout.navigate(['netLogin']);
  }
  CrossNet(msg: string, action: string, formvalue: netLoginData) {
    this.pageTab = false;
    this.pageProcess = true;
    this.pageFooterImage = false;
    setTimeout(() => {
      if (this.netLObj.nUsername && this.netLObj.nPassword) {
        this.netDataArray.filter((nd) => {
          if (
            nd.username == this.netLObj.nUsername &&
            nd.password == this.netLObj.nPassword
          ) {
            this.pageTab = false;
            this.pageNetBank = false;
            this.errorMessage=false;
            this.pageProcess = false;
            this.pageFooterImage = false;
            this.pageSucess = true;
            // this.showProcessPage();
            // this.NetProcess();
            // this.NetSucess();
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;

          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
          this.pageFooterImage = false;
        }
      }
    }, 2000);
  }
  showProcessPage() {
    // this.pageSucess = true;
    this.pageNetBank = true;
    this.pageFooterImage = false;
  }
  storeUpiDetails(formvalue: UpiData) {
    this.pageTab = false;
    this.pageProcess = true;
    this.pageFooterImage = false;
    setTimeout(() => {
      if (this.upiObj.upiId) {
        this.UpiArrayData.filter((ud) => {
          if (ud.upiId == this.upiObj.upiId) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageFooterImage = false;
            this.pageSucess = true;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
          this.pageFooterImage = false;
        }
      }
    }, 4000);
  }
storeWalletData1(val:string){
  this.walletsArray.push(val);
  // localStorage.setItem('netBankDetails', JSON.stringify(this.netBankArray));
  this.pageTab = true;
 this.pageWalletTab = false;
 this.pageWallet = true;
 this.pageFooterImage = false;

}

  storeWalletData(formvalue: walletData) {
    this.pageTab = false;
    this.pageProcess = true;
    this.pageFooterImage = false;
    setTimeout(() => {
      if (this.walletObj.wPhone) {
        this.WalletArrayData.filter((wd) => {
          if (wd.phoneNo == this.walletObj.wPhone) {
            this.pageTab = false;
            this.pageProcess = false;
            this.pageSucess = true;
            this.pageFooterImage = false;
            this.receiptShow();
          }
        });
        if (this.pageSucess != true) {
          this.pageTab = true;
          this.errorMessage = true;
          this.pageProcess = false;
          this.pageSucess = false;
          this.pageFooterImage = false;
        }
      }
    }, 3000);
  }
  receiptShow() {
    setTimeout(() => {
      this.pageTab = false;
      this.errorMessage = false;
      this.pageProcess = false;
      this.pageSucess = false;
      // this.pageFooterImage = false;
      this.rout.navigate(['reciept']);
    }, 3000);
  }

  NetSucess(){
    setTimeout(()=>{
      this.pageTab=false;
      this.errorMessage=false;
      this.pageProcess=false;
      this.pageSucess=true;
      this.pageFooterImage = false;

    },2000)
  }
  NetProcess(){
    setTimeout(()=>{
      this.pageTab=false;
      // this.errorMessage=false;
      this.pageProcess=true;
      this.pageSucess=false;
      this.pageFooterImage = false;

    },3000)

  }

  selectBank(val: string) {
    // if(pnb= "PNB")
    this.netBValue = val;
  }
  selectWallet(val: string) {
    this.walletValue = val;
  }

  ngOnInit(): void {
    this.adObj= new advanceData();
    this.netObj = new netbankData();
    this.netLObj = new netLoginData();
    this.upiObj = new UpiData();
    this.walletObj = new walletData();
    this.hotelName = JSON.parse(localStorage.getItem('tableRegistered'));
    // this.pageFooterImage = true;
  }
  showCardInInput(value: string) {
    if (value.startsWith('3')) {
      this.cardImg = '../../assets/card-images/american-express.png';
      console.log('hello');
    }
    if (value.startsWith('4')) {
      this.cardImg = '../../assets/card-images/visa.svg';
    }
    if (value.startsWith('5')) {
      this.cardImg = '../../assets/card-images/mastercard.svg';
      // console.log(value.startsWith('5'));
    }
    if (value.startsWith('6')) {
      this.cardImg = '../../assets/card-images/rupay.svg';
    }
  }


}

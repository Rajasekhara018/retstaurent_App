import { Dialog } from '@angular/cdk/dialog'
import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Router } from '@angular/router'
// import { advanceData } from '../advance-pay/advance-pay.component';
import {
  advanceData,
  HomeServiceService,
  netbankData,
  netLoginData,
  UpiData,
  walletData,
} from '../home-service.service'
import { ReviewComponent } from '../review/review.component'

@Component({
  selector: 'app-dineout-page',
  templateUrl: './dineout-page.component.html',
  styleUrls: ['./dineout-page.component.scss'],
})
export class DineoutPageComponent implements OnInit {
  //   constructor(private hservice : HomeServiceService) { }

  // tableData = [];
  //   ngOnInit(): void {
  //     this.hotelName = JSON.parse(localStorage.getItem('tableRegistered'));

  //   }
  hide = true

  AdvancePayForm: any
  NetBankForm: any
  UpiForm: any
  Wallet: any

  adObj: advanceData
  netObj: netbankData
  upiObj: UpiData
  walletObj: walletData
  netLObj: netLoginData

  // carddetailsArray = [];
  netBankArray = []
  upiArray = []
  walletsArray = []

  valid1: any

  hotelName: any
  tableData = []
  cardImg: any

  netBValue: string
  pattern = '^d{10}$'
  maxlength = '10'

  carddetailsArray = [
    {
      cNum: '3456789123456678',
      cValid: '04/27',
      cCvv: '123',
      cName: 'Akshata',
    },
    {
      cNum: '4444444444444444',
      cValid: '04/27',
      cCvv: '234',
      cName: 'Amaravathi',
    },
    { cNum: '5555555555555555', cValid: '03/27', cCvv: '567', cName: 'Arnav' },
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
  ]
  netDataArray = [
    { username: 'Akshata', password: 'Password' },
    { username: 'Vanitha', password: 'Password' },
    { username: 'Jaharika', password: 'Password' },
    { username: 'Arnav', password: 'Password' },
  ]
  UpiArrayData = [
    { upiId: 'akshata@oksbi' },
    { upiId: 'akshata@ybl' },
    { upiId: 'akshata@ibl' },
    { upiId: 'akshata@axl' },
  ]

  WalletArrayData = [
    { phoneNo: '6767876787',accBal:50000 },
    { phoneNo: '6666666666',accBal:1000 },
    { phoneNo: '3333333333',accBal:500 },
    { phoneNo: '9999999999',accBal:50 },
  ]

  errorMessage: boolean;
  insufficientBal:boolean;
  pageTab = true
  pageProcess: boolean
  pageSucess: boolean
  pageNetBank: boolean
  pageNetTab = true
  pageWalletTab = true
  pageWallet: boolean
  upiValue: string
  walletValue: string
  tableDetails: void

  constructor(
    public hservice: HomeServiceService,
    private snack: MatSnackBar,
    private rout: Router,
    private dialog: Dialog,
  ) {}
  storeCardDetails(msg: any, action: string, formvalue: advanceData) {
    this.pageTab = false
    this.pageProcess = true
    this.errorMessage = false
    this.insufficientBal=false
    // this.pageSucess=true;

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
            this.pageTab = false
            this.pageProcess = false
            this.pageSucess = true
            this.errorMessage = false
            this.insufficientBal=false
            // AdvancePayForm.reset();

            this.receiptShow()
          }
        })
        if (this.pageSucess != true) {
          this.pageTab = true
          this.errorMessage = true
          this.insufficientBal=false
          this.pageProcess = false
          this.pageSucess = false
       this.adObj.cardNumber="";
       this.adObj.cvv="";
       this.adObj.nameOnCard="";
       this.adObj.validDate="";
        }
      }
    }, 2000)
    // AdvancePayForm.reset();
  }

  storeNetBAnkDetails(val: string) {
    this.netBankArray.push(val)
    localStorage.setItem('netBankDetails', JSON.stringify(this.netBankArray))
    this.pageTab = true
    this.pageNetTab = false
    this.pageNetBank = true
    this.errorMessage = false
    this.insufficientBal=false
    // this.showProcessPage();
    // this.rout.navigate(['netLogin']);
  }
  CrossNet(msg: string, action: string, formvalue: netLoginData) {
    this.pageTab = false
    this.pageProcess = true
    this.errorMessage = false
    this.insufficientBal=false
    setTimeout(() => {
      if (this.netLObj.nUsername && this.netLObj.nPassword) {
        this.netDataArray.filter((nd) => {
          if (
            nd.username == this.netLObj.nUsername &&
            nd.password == this.netLObj.nPassword
          ) {
            this.pageTab = false
            this.pageNetBank = false
            this.errorMessage = false
            this.pageProcess = false
            this.insufficientBal=false
            this.pageSucess = true
            // this.showProcessPage();
            // this.NetProcess();
            // this.NetSucess();
            this.receiptShow()
          }
        })
        if (this.pageSucess != true) {
          this.pageTab = true

          this.errorMessage = true
          this.insufficientBal=false
          this.pageProcess = false
          this.pageSucess = false
          this.tabChangeIndex = this.TabIndex;
          this.netLObj.nUsername="";
          this.netLObj.nPassword="";
        }
      }
    }, 2000)
  }
  showProcessPage() {
    // this.pageSucess = true;
    this.pageNetBank = true
    this.errorMessage = false
    this.insufficientBal=false
  }
  storeUpiDetails(formvalue: UpiData) {
    this.pageTab = false
    this.pageProcess = true
    this.errorMessage = false
    this.insufficientBal=false
    setTimeout(() => {
      if (this.upiObj.upiId) {
        this.UpiArrayData.filter((ud) => {
          if (ud.upiId == this.upiObj.upiId) {
            this.pageTab = false
            this.pageProcess = false
            this.pageSucess = true
            this.errorMessage = false
            this.insufficientBal=false
            this.receiptShow()
          }
        })
        if (this.pageSucess != true) {
          this.pageTab = true
          this.errorMessage = true
          this.pageProcess = false
          this.pageSucess = false
          this.insufficientBal=false
          this.tabChangeIndex = this.TabIndex;
          this.upiObj.upiId="";
        }
      }
    }, 4000)
    //   this.UpiForm.reset()
  }
  tabChangeIndex = 0
  TabIndex: number
  selectedTab(tabChange: MatTabChangeEvent) {
    this.TabIndex = tabChange.index
    this.errorMessage = false
    this.insufficientBal=false

    console.log(this.TabIndex)
  }
  storeWalletData1(val: string) {
    this.walletsArray.push(val)
    // localStorage.setItem('netBankDetails', JSON.stringify(this.netBankArray));
    this.pageTab = true
    this.pageWalletTab = false
    this.pageWallet = true
    this.errorMessage = false
  }



  storeWalletData(formvalue: walletData) {
    this.pageTab = false
    this.pageProcess = true
    this.errorMessage = false
    setTimeout(() => {
      if (this.walletObj.wPhone) {
        this.WalletArrayData.filter((wd) => {
          if (wd.phoneNo == this.walletObj.wPhone  ) {
            this.pageTab = false
            this.pageProcess = false
            this.pageSucess = true
            this.receiptShow()
          }
        });


        if (this.pageSucess != true) {
          this.pageTab = true
          // this.errorMessage = true
          this.insufficientBal=true
          this.pageProcess = false
          this.pageSucess = false
          this.tabChangeIndex = this.TabIndex
          this.walletObj.wPhone="";
        }


    }
    }, 3000)
  }


  receiptShow() {
    setTimeout(() => {
      this.pageTab = false
      this.errorMessage = false
      this.pageProcess = false
      this.pageSucess = false
      this.rout.navigate(['reciept'])
    }, 3000)
  }

  NetSucess() {
    setTimeout(() => {
      this.pageTab = false
      this.errorMessage = false
      this.pageProcess = false
      this.pageSucess = true
    }, 2000)
  }
  NetProcess() {
    setTimeout(() => {
      this.pageTab = false
      // this.errorMessage=false;
      this.pageProcess = true
      this.pageSucess = false
    }, 3000)
  }

  selectBank(val: string) {
    this.netBValue = val
  }
  selectWallet(val: string) {
    this.walletValue = val
  }

  ngOnInit(): void {
    this.adObj = new advanceData()
    this.netObj = new netbankData()
    this.netLObj = new netLoginData()
    this.upiObj = new UpiData()
    this.walletObj = new walletData()
    this.hotelName = JSON.parse(localStorage.getItem('tableRegistered'))
    // console.log('amt',this.hotelName.price)
    console.log('amt',this.hotelName.filter((at)=> at.price))
    // this.tableDetails=

    // this.AdvancePayForm.reset();
  }

  public a = ''
  showCardInInput(value: string) {
    if (value.startsWith('3')) {
      this.cardImg = '../../assets/card-images/american-express.png'
      console.log('hello')
    }
    if (value.startsWith('4')) {
      this.cardImg = '../../assets/card-images/visa.svg'
    }
    if (value.startsWith('5')) {
      this.cardImg = '../../assets/card-images/mastercard.svg'
      // console.log(value.startsWith('5'));
    }
    if (value.startsWith('6')) {
      this.cardImg = '../../assets/card-images/rupay.svg'
    }
  }
}

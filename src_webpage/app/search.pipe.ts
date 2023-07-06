import { Pipe, PipeTransform } from '@angular/core';
import { HomeServiceService } from './home-service.service';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private hservice: HomeServiceService){}
  transform(items: any[], searchText: string): any[] {

    searchText = searchText.toLowerCase();
    let rValue = [];
    if (!searchText) {
      return items;
    } else {
      items.filter((it: any) => {
        if(JSON.stringify(it).toLowerCase().toString().includes(searchText)){
          rValue.push(it);
        // }
        }

      });
      this.hservice.searchPipe = rValue;
      return rValue;
      // items.forEach(element => {
      //   console.log(element.rname.includes(searchText))
      //   if (element.rname.includes(searchText)) {
      //     rValue= items.filter((it: any) => {
      //       return JSON.stringify(it).toLowerCase().toString().includes(searchText);
      //     });
      //   } else if (element.location.includes(searchText)) {
      //     rValue= items.filter((it: any) => {
      //       return JSON.stringify(it).toLowerCase().toString().includes(searchText);
      //     });
      //   } else if (element.cuisine.includes(searchText)) {
      //     rValue=items.filter((it: any) => {
      //       return JSON.stringify(it).toLowerCase().toString().includes(searchText);
      //     });
      //   } else{

      //     console.log('Record not found');
      //     return;
      //   }
      // })
      // return rValue;
    }

  }
}


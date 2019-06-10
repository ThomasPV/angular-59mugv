import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'REAL TIME SEARCH ';
  SearchedKeyword = '';
  alertValue(e){
  this.SearchedKeyword = e;
  }
}

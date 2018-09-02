import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cxsearch',
  templateUrl: './cxsearch.component.html',
  styleUrls: ['./cxsearch.component.css']
})
export class CxsearchComponent implements OnInit {
  static readonly RoseStreet = '54';
  static readonly CameronToll = '3017';
  static readonly Leith = '3115';
  value = '';
  activeStore = CxsearchComponent.RoseStreet;
  constructor() { }

  ngOnInit() {
  }
  searchProduct(inp) {
    console.log(inp);
    this.value = inp;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cxsearch',
  templateUrl: './cxsearch.component.html',
  styleUrls: ['./cxsearch.component.css']
})
export class CxsearchComponent implements OnInit {
  static readonly Rose_Street = '54';
  static readonly Cameron_Toll = '3017';
  static readonly Leith = '3115';
  Stores = [CxsearchComponent.Rose_Street,
  CxsearchComponent.Cameron_Toll, CxsearchComponent.Leith];
  value = '';
  activeStore = CxsearchComponent.Rose_Street;
  constructor() { }

  ngOnInit() {
  }
  searchProduct(inp) {
    console.log(inp);
    this.value = inp;
  }

}

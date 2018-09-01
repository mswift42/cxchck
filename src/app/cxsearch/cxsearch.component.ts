import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cxsearch',
  templateUrl: './cxsearch.component.html',
  styleUrls: ['./cxsearch.component.css']
})
export class CxsearchComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit() {
  }
  searchProduct(inp) {
    console.log(inp.value);
    this.value = inp.value;
  }

}

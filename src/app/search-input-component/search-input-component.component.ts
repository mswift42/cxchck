import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField } from '@angular/material';

@Component({
  selector: 'app-search-input-component',
  templateUrl: './search-input-component.component.html',
  styleUrls: ['./search-input-component.component.css'],
})
export class SearchInputComponentComponent implements OnInit {
  value = '';

  searchProduct(inp) {
    console.log(inp.target.value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

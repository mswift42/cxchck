import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-input-component',
  templateUrl: './search-input-component.component.html',
  styleUrls: ['./search-input-component.component.css'],
})
export class SearchInputComponentComponent implements OnInit {
  value = '';
  activeStore;

  storeList = [
    new Store(
      'Rose Street', '54'
    ),
    new Store(
      'Cameron Toll', '3017'
    )
  ];

  searchProduct(inp) {
    console.log(inp.target.value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

class Store {
  name: string;
  location: string;


  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }
}

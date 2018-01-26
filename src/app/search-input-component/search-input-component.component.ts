import {Component, OnInit} from '@angular/core';
import {MockProductService} from '../mock-product.service';
import {Product} from '../product';

@Component({
  selector: 'app-search-input-component',
  templateUrl: './search-input-component.component.html',
  styleUrls: ['./search-input-component.component.css'],
  providers: [MockProductService]
})
export class SearchInputComponentComponent implements OnInit {
  value = '';
  storeList = [
    new Store(
      'Rose Street', '54'
    ),
    new Store(
      'Cameron Toll', '3017'
    )
  ];
  products: Product[];

  activeStore = this.storeList[0];


  searchProduct(inp) {
    console.log(inp.target.value);
  }

  constructor(private mockProductService: MockProductService) {
    this.products = this.mockProductService.mockProducts;
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

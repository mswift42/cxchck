import {Component, OnInit} from '@angular/core';
import {MockProductService} from '../mock-product.service';
import {Product} from '../product';
import {QueryServiceService} from '../query-service.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {from} from 'rxjs/observable/from';


@Component({
  selector: 'app-search-input-component',
  templateUrl: './search-input-component.component.html',
  styleUrls: ['./search-input-component.component.css'],
  providers: [QueryServiceService]
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
  products: Product[] = [];

  activeStore = this.storeList[0];

  setProducts(response: Response) {
  }

  searchProduct(inp) {
    this.products = [];
    this.queryService.getProducts(
      inp.target.value, this.activeStore.location
    ).subscribe(
      (data: any) => data.forEach((i) => this.products.push(
        new Product(i['title'],
          'https://uk.webuy.com' + i['thumbnail'],
          i['price'],
          '',
          i['url'])
      )));

  }

  constructor(private queryService: QueryServiceService) {
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

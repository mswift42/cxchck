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
  private baseurl = 'https://uk.webuy.com';
  noResults = false;

  activeStore = this.storeList[0];

  setProducts(data: any) {
    if (data != null) {
      data.forEach((i) => this.products.push(
        new Product(i['title'],
          this.baseurl +  i['thumbnail'],
          i['price'],
          '',
          this.baseurl + i['url'])));
    } else {
      this.noResults = true;
    }
  }

  searchProduct(inp) {
    if (inp != '') {
      this.products = [];
      this.noResults = false;
      this.value = inp;
      this.queryService.getProducts(
        this.value, this.activeStore.location
      ).subscribe(
        (data: any) => this.setProducts(data)
      );
      // (data: any) => data.forEach((i) => this.products.push(
      //   new Product(i['title'],
      //     this.baseurl +  i['thumbnail'],
      //     i['price'],
      //     '',
      //     this.baseurl + i['url'])
      // ),
      //   err => this.noResults = true
      // ));
    }
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

import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Product} from '../product';
import {Store} from '../store';

@Component({
  selector: 'app-cxsearch',
  templateUrl: './cxsearch.component.html',
  styleUrls: ['./cxsearch.component.css']
})
export class CxsearchComponent implements OnInit {
  Stores = [new Store('Rose Street', '54'),
  new Store('Cameron Toll', '3017'),
  new Store('Leith', '3115')];
  value = '';
  activeStore = this.Stores[0];
  products: Product[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  searchProduct(inp) {
    this.value = inp;
    this.products = [];
    this.searchService.getProducts(
      this.value, this.activeStore.id
    ).subscribe(
      (data: Product[]) => data.forEach((i) =>
        this.products.push(
        new Product(i['title'],
            i['thumbnail'],
        i['price'],
       '',
        i['url'])))
    );
  }

}

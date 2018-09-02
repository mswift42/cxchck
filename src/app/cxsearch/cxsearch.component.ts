import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Product} from '../product';

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
  products: Product[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  searchProduct(inp) {
    this.value = inp;
    console.log(this.value);
    this.products = [];
    this.searchService.getProducts(
      this.value, this.activeStore
    ).subscribe(
      (data: Product[]) => data.forEach((i) =>
        this.products.push(
        new Product(i['title'],
            i['thumbnail'],
        i['price'],
       '',
        i['url'])))
    );
    console.log(this.products);
  }

}

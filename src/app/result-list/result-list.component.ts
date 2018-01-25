import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MockProductService } from '../mock-product.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [MockProductService]
})
export class ResultListComponent implements OnInit {
  products: Product[] = [];

  constructor(private mockProductService: MockProductService) { }

  ngOnInit() {
    this.products = this.mockProductService.mockProducts;
  }

}

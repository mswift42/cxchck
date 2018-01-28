import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  constructor() { }

  ngOnInit() {
  }

}

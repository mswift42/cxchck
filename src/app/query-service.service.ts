import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import {Http} from '@angular/http';

@Injectable()
export class QueryServiceService {
  private url(query: string, location: string): string {
    return 'http://localhost:4242/querycx?query=' + query +
      '$location=' + location;
  }

  getProducts(query: string, location: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url(query, location));
  }


  constructor(private http: HttpClient) {
  }

}

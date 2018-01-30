import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryServiceService {
  private url(query: string, location: string): string {
    const trimmed = query.trim().replace( ' ', ',');
    return '/querycx?query=' + trimmed +
      '&location=' + location;
  }

  getProducts(query: string, location: string): Observable<any> {
    const u = this.url(query, location);
    return  this.http.get(u)
      .map((data: any) => data)
      .catch((err) => Observable.throw(err));
  }


  constructor(private http: HttpClient) {
  }

}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url(query: string, location: string): string {
    return `http://localhost:8080/querycx?query=${query}&location=${location}`;
  }

  getProducts(query: string, location: string): Observable<any> {
    const u = this.url(query, location);
    return this.http.get(u)
      .pipe(map((data: any) => data));
  }



  constructor(private http: HttpClient) { }
}

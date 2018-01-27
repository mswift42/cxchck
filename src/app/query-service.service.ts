import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QueryServiceService {
  private _products: string[] = [];
  private url(query: string, location: string): string {
    return 'http://localhost:4242/querycx?query=' + query +
      '$location=' + location;
  }

  get products(): string[] {
    return this._products
  }

  constructor() { }

}

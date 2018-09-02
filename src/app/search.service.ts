import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url(query: string, location: string): string {
    return `http://localhost:4242/querycx?query=${query}&location=${location}`;
  }


  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private url="http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getPosts()
  {
     return this.http.get(this.url);
  }
}
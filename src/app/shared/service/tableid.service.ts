import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TableidService {
  resourceId="5eae7981c743912094c79724";
  constructor(private http: HttpClient) { }
 
   getPostId(url,resourceId)
  {
   console.log(this.resourceId);
    return this.http.get(url+this.resourceId);
  }
}

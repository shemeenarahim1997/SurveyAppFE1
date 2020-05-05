

import { DataService } from '../../shared/service/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataService{
  constructor(http: HttpClient) { super('http://localhost:8080/login',http)}
 
}

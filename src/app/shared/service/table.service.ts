import { Injectable } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

constructor(private http: HttpClient) { }
  getPosts(url)
  { 
     return this.http.get(url);
   
  }
 }
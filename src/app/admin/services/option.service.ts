import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/shared/components/http-error-components/app-error';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http:HttpClient) { }
  
  createOption(resource) {
    return this.http.post('http://localhost:8080/survey/new-option',resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  getOption(optId) {
    return this.http.get('http://localhost:8080/survey/view-option/' + optId).pipe(
      catchError(error => throwError(new AppError(error))))
  }

  editOption(optId,resource) {
    return this.http.put('http://localhost:8080/survey/edit-option/' + optId ,resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }

  deleteOption(optId) {
    return this.http.delete('http://localhost:8080/survey/delete-option/' + optId).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  
}

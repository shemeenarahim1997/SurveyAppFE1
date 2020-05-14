import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/shared/components/http-error-components/app-error';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  
  createQuestion(resource) {
    return this.http.post('http://localhost:8080/survey/new-question',resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }

  editQuestion(qId,resource) {
    return this.http.put('http://localhost:8080/survey/edit-question/' + qId ,resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }

  deleteQuestion(qId) {
    return this.http.delete('http://localhost:8080/survey/delete-question/' + qId).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  
}


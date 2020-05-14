import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/shared/components/http-error-components/app-error';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient) { }

  getSurvey(resource) {
    return this.http.get('http://localhost:8080/view-survey/' + resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  
  createSurvey(resource) {
    return this.http.post('http://localhost:8080/new-survey',resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }

  editSurvey(surId,resource) {
    return this.http.put('http://localhost:8080/edit-survey/'+surId ,resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  
}


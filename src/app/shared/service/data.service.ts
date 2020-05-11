import { AppError } from '../components/http-error-components/app-error';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  
  getAll(){
    return this.http.get(this.url).pipe(
      catchError(error => throwError(new AppError(error))))
  }

  create(resource){
    return this.http.post(this.url, resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  update(resource){
    return this.http.put(this.url, resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }
  delete(resource){
    return this.http.delete(this.url, resource).pipe(
      catchError(error => throwError(new AppError(error))))
  }
}

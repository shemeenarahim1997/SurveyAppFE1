import { NotFound } from './../components/http-error-components/not-found-error';
import { BadRequest } from './../components/http-error-components/bad-request';
import { AppError } from '../components/http-error-components/app-error';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  
  getAll(){
    return this.http.get(this.url).pipe(
      catchError((this.handleError)));
  }

  create(resource){
    return this.http.post(this.url, resource).pipe(
      catchError((this.handleError)));
  }
  update(resource){
    return this.http.patch(this.url, resource).pipe(
      catchError((this.handleError)));
  }
  delete(resource){
    return this.http.delete(this.url, resource).pipe(
      catchError((this.handleError)));
  }

  private handleError(error: Response) {
    if(error.status === 400) {
      return throwError(new BadRequest(error));
    }
    if(error.status === 404) {
        return throwError(new NotFound());
      }
    return throwError(new AppError(error));
  }
}

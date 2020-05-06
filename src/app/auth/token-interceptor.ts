import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>,next:HttpHandler)
    { let token=localStorage.getItem('token');
    request=this.addToken(request,token);
      return next.handle(request);
    }
    private addToken(request:HttpRequest<any>,token:string)
    {
        return request.clone(
            {
                setHeaders:{'Authorization':`Bearer ${token}`}
            }
        );
    }
}

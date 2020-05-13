import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthService {

  private loginStatus = new BehaviorSubject<boolean>(false);
  private userName = new BehaviorSubject<string>("");

  constructor(public jwtHelper: JwtHelperService,private router:Router) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  public logIn(): void {
    this.loginStatus.next(this.isAuthenticated());
    this.userName.next(localStorage.getItem('user'));
  }
  public logout(): void {
    this.loginStatus.next(false);
    this.userName.next("");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  get isLoggedIn(){
    return this.loginStatus.asObservable();
  }
  get currentUsername(){
    return this.userName.asObservable();
  }
}
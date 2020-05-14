import { AuthService } from './../../../shared/service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit,OnDestroy{
  opened=false;
  loginStatus$: Observable<boolean>;
  loginStatus;
  userName$: Observable<string>;
  userName;
  statusSubscription: Subscription;
  userSubscription:Subscription;
  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.loginStatus$ = this.authService.isLoggedIn;
    this.statusSubscription = this.loginStatus$.subscribe(loginStatus => this.loginStatus=loginStatus);
    this.userName$ = this.authService.currentUsername;
    this.userSubscription = this.userName$.subscribe(userName => this.userName=userName);
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  onLogOut(){
    this.authService.logout();
  }
}

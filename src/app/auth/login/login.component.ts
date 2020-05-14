import { AuthService } from './../../shared/service/auth.service';
import { Component ,ViewChild} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {AppError} from './../../../app/shared/components/http-error-components/app-error';
import {LoginService} from '../../auth/service/login.service';
import { NgForm,Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('loginForm') public loginForm:NgForm;
  form: FormGroup;
 
  constructor(
    formBuilder: FormBuilder,
    private loginService: LoginService,
    private router:Router,
    private authService:AuthService,
    private route: ActivatedRoute){
  
    this.form = formBuilder.group({
      email: formBuilder.control('',[Validators.required,Validators.email]),
      password: formBuilder.control('',[Validators.required,Validators.minLength(8)])
    });
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
onSubmit()
{
this.loginService.create(this.form.value)
.subscribe(response=>{
  localStorage.setItem('token',response['token']);
  localStorage.setItem('user',response['username']);
  this.authService.logIn();
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  this.router.navigate([returnUrl || '/newSurvey']);
},
(error: AppError) => { 
  throw error;
})
 }
}
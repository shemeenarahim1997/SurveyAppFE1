import { Component ,ViewChild} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {AppError} from './../../../app/shared/components/http-error-components/app-error';
import {LoginService} from '../../auth/service/login.service';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm,Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('loginForm') public loginForm:NgForm;
  form: FormGroup;
 
  constructor(formBuilder: FormBuilder,private service: LoginService,private router:Router){
  
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

 onSubmit(user)
{

let json=JSON.stringify(user);
console.log(json);
this.service.create(this.form.value)
.subscribe(response=>{
  console.log(response);
localStorage.setItem('token',response['token']);
  this.router.navigate(['/table']);
},
(error: AppError) => { 
  throw error;
})
 }
}
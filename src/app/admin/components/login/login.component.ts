import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })
  get email(){
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password');
  }
 constructor(private router:Router) { }

  
  text="Login";
  name1="Email";
  name2="Password";
  p_holder1="enter you email id";
  p_holder2="enter your password";
  _type="password";
  _icon1="email";
  _icon2="lock";
 }
import { Component } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form: FormGroup;
  
  constructor(formBuilder: FormBuilder,private httpClient:HttpClient,private router:Router){
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
  private url="http://localhost:8080/login";
 onSubmit(user)
{

let json=JSON.stringify(user);
console.log(json);
this.httpClient.post(this.url, json, this.httpOptions)
.subscribe(response=>{
  console.log(response);
localStorage.setItem('token',response['token']);
  this.router.navigate(['/table']);
})
 }
}
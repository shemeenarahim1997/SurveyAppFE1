import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form: FormGroup;
  
  constructor(formBuilder: FormBuilder){
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


 }
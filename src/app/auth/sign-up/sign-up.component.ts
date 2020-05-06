import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.form = formBuilder.group({
      firstName: formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: formBuilder.control('', [Validators.required, Validators.email]),
      password: formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: formBuilder.control('', [Validators.required, Validators.minLength(8)])
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private url = 'http://localhost:8080/register';

  onSubmit(user) {
    let json = JSON.stringify(user);
    console.log(json);
    this.httpClient.post(this.url, json, this.httpOptions)
      .subscribe(response => {
        console.log(response);
      })
  }
}

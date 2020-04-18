import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from '../shared/components/mat-components/mat-components.module';
import { ConfirmEqualValidatorDirective } from '../shared/service/confirm_equal_validator.directive';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [
  ]})
export class AuthModule { }

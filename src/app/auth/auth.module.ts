import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from '../shared/components/mat-components/mat-components.module';
import { ConfirmEqualValidatorDirective } from '../shared/service/confirm-equal-validator.directive';
import { TokenInterceptor } from './token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TableModule} from 'primeng/table';
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
    MatComponentsModule,
    TableModule
    

],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }

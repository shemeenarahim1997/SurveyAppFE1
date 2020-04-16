import { RouterModule } from '@angular/router';
import { MatComponentsModule } from './../shared/components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmEqualValidatorDirective } from '../shared/service/confirm_equal_validator.directive';
import { AddSurveyComponent } from './components/survey/add-survey/add-survey.component';

@NgModule({
  declarations: [
    LoginComponent,
    ViewResultComponent,
    SignUpComponent,
    ConfirmEqualValidatorDirective,
    AddSurveyComponent,
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
export class AdminModule { }

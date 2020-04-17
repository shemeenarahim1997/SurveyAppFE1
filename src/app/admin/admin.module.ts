import { RouterModule } from '@angular/router';
import { MatComponentsModule } from './../shared/components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmEqualValidatorDirective } from '../shared/service/confirm_equal_validator.directive';
import { LoginComponent } from '../public/login/login.component';
import { SignUpComponent } from '../public/sign-up/sign-up.component';
import { AddSurveyComponent } from './components/survey-creation/add-survey/add-survey.component';
import { AddQuestionOptionsComponent } from './components/survey-creation/add-question-options/add-question-options.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ConfirmEqualValidatorDirective,
    AddSurveyComponent,
    AddQuestionOptionsComponent,
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

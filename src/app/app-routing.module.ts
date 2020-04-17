import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { AddSurveyComponent } from './admin/components/survey-creation/add-survey/add-survey.component';
import { AddQuestionOptionsComponent } from './admin/components/survey-creation/add-question-options/add-question-options.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    component: SignUpComponent 
  },
  { 
    path: 'new_survey', 
    component: AddSurveyComponent 
  },
  { 
    path: 'new_survey/:survey_id', 
    component: AddQuestionOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSurveyComponent } from './admin/components/survey-creation/add-survey/add-survey.component';
import { AddQuestionOptionsComponent } from './admin/components/survey-creation/add-question-options/add-question-options.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {ViewListComponent} from './admin/components/view-list/view-list.component';
const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  {
    path:'table',
    component: ViewListComponent
  },
  { 
    path: 'signUp', 
    component: SignUpComponent 
  },
  { 
    path: 'newSurvey', 
    component: AddSurveyComponent 
  },
  { 
    path: 'newSurvey/:surveyId', 
    component: AddQuestionOptionsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

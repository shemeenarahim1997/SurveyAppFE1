import { CreateSurveyComponent } from './admin/components/create-survey/create-survey.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'sign-up', 
    component: SignUpComponent 
  },
  { 
    path: 'new-survey/:surId/:qId', 
    component: CreateSurveyComponent 
  },
  { 
    path: 'new-survey/:surId', 
    component: CreateSurveyComponent 
  },
  { 
    path: 'new-survey', 
    component: CreateSurveyComponent 
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

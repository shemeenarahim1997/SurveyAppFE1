import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/components/login/login.component';
import { SignUpComponent } from './admin/components/sign-up/sign-up.component';
import { AddSurveyComponent } from './admin/components/survey/add-survey/add-survey.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'new_survey', component: AddSurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

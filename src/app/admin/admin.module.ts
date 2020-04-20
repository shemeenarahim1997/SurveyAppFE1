import { TextAreaComponent } from './../shared/components/text-area/text-area.component';
import { RouterModule } from '@angular/router';
import { MatComponentsModule } from './../shared/components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSurveyComponent } from './components/survey-creation/add-survey/add-survey.component';
import { AddQuestionOptionsComponent } from './components/survey-creation/add-question-options/add-question-options.component';

@NgModule({
  declarations: [
    AddSurveyComponent,
    AddQuestionOptionsComponent
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

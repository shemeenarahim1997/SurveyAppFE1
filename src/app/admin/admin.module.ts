import { OptionService } from './services/option.service';
import { QuestionService } from './services/question.service';
import { SurveyService } from './services/survey.service';
import {StepsModule} from 'primeng/steps';
import { RouterModule } from '@angular/router';
import { MatComponentsModule } from './../shared/components/mat-components/mat-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { OptionFormComponent } from './components/option-form/option-form.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    CreateSurveyComponent,
    SurveyFormComponent,
    QuestionFormComponent,
    OptionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    StepsModule,
    CardModule
  ],
  providers: [
    SurveyService,
    QuestionService,
    OptionService
  ]})
export class AdminModule { }

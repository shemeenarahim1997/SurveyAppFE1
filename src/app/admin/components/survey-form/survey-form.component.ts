import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppError } from 'src/app/shared/components/http-error-components/app-error';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  @Output() surveyCreated = new EventEmitter();
  surveyId:string;
  surveyForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: SurveyService) {
    this.surveyForm = formBuilder.group({
      survey_name: formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      survey_description: formBuilder.control(''),
    });
    this.route.queryParams.subscribe(params => {
      this.surveyId = params['surId'];
      if(this.surveyId) {
          this.service.getSurvey(this.surveyId).pipe(take(1)).subscribe(response => {
            let survey = response['surveyDetails'];
            this.surveyForm.patchValue({
              survey_name: survey[0].survey_name,
              survey_description: survey[0].survey_description
            })
          })
      }
     
    });
   
  }
  get surveyName() {
    return this.surveyForm.get('survey_name');
  }
  get surveyDescription() {
    return this.surveyForm.get('survey_description');
  }

  createSurvey() {
    if (this.surveyForm.valid && !this.surveyId) {
      this.service.createSurvey(this.surveyForm.value)
        .subscribe(
          (response: any) => {
            this.surveyCreated.emit(response);
          },
          (error: AppError) => {
            throw error;
          })
    } else if(this.surveyForm.valid && this.surveyId){
      this.service.editSurvey(this.surveyId,this.surveyForm.value)
        .subscribe(
          (response: any) => {
            this.surveyCreated.emit(response);
          },
          (error: AppError) => {
            throw error;
          })
    }
  }
}

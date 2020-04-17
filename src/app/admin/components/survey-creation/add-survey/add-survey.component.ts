import { SurveyCreateService } from './../../../../shared/service/survey-create.service';
import { Router } from '@angular/router';
import { BadRequest } from './../../../../shared/components/http-error-components/bad-request';
import { AppError } from './../../../../shared/components/http-error-components/app-error';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})

export class AddSurveyComponent{
  @ViewChild('myNgForm') public myNgForm: NgForm;
  sur_name= "Survey Name";
  plhr_sur_name= "Enter a name";
  button_label= "Create";
  form: FormGroup;


  constructor(
    formBuilder: FormBuilder, 
    private service: SurveyCreateService, 
    private router: Router){
    this.form = formBuilder.group({
      survey_name: formBuilder.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      survey_description: formBuilder.control(''),
      });
  }



  get surveyName() {
    return this.form.get('survey_name');
  }
  get surveyDescription() {
    return this.form.get('survey_description');
  }

  createSurvey(){
    this.service.create(this.form.value)
    .subscribe(
      (response:any) => {
      this.myNgForm.resetForm();
      let survey_id = response._id;
      this.router.navigate(['/new_survey/',survey_id]);
      }, 
      (error: AppError) => {
        if(error instanceof BadRequest) {      
          this.form.setErrors(error.originalError);      
        }
        else throw error;
    })
  }
}

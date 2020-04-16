import { BadRequest } from './../../../../shared/components/http-error-components/bad-request';
import { AppError } from './../../../../shared/components/http-error-components/app-error';
import { PostService } from './../../../../shared/service/post.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})

export class AddSurveyComponent{
  sur_name= "Survey Name";
  plhr_sur_name= "Enter a name";
  button_label= "Create";
  form: FormGroup;
  constructor(formBuilder: FormBuilder, private service: PostService){
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
    this.service.create('/survey', this.form.value)
    .subscribe(
      (response:any) => {
      console.log(response._id);
      }, 
      (error: AppError) => {
        if(error instanceof BadRequest) {
          console.log(error.originalError.error.message);        
          this.form.setErrors(error.originalError);      
        }
        else throw error;
    })
  }
}

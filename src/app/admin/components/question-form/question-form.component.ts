import { SurveyService } from './../../services/survey.service';
import { QuestionService } from './../../services/question.service';
import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppError } from 'src/app/shared/components/http-error-components/app-error';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @ViewChild('questForm') public questForm: NgForm;
  isEditing = false;
  updateOpt=false;
  deleteOpt=false;
  addOption = false;
  surveyId = null;
  questionSet = [];
  questionId = null;
  currentQuestion;
  questionForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: SurveyService,
    private questionService: QuestionService) {

    this.questionForm = formBuilder.group({
      question: formBuilder.control('', [Validators.required]),
      questionType: formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.surveyId = params['surId'];
      this.questionId = params['qId'];
    });
    if (this.surveyId) {
      this.updateQuestionOptions();
    }
  }


  get question() {
    return this.questionForm.get('question');
  }
  get questionType() {
    return this.questionForm.get('questionType');
  }


  addQuestion() {
    let resource = {
      survey_id: this.surveyId,
      question: this.questionForm.value.question,
      question_type: this.questionForm.value.questionType
    }
    if (this.questionForm.valid && !this.isEditing) {
      this.questionService.createQuestion(resource)
        .subscribe(
          (response: any) => {
            this.updateQuestionOptions();
            this.questForm.resetForm();
          },
          (error: AppError) => {
            throw error;
          })
    }
    else if (this.questionForm.valid && this.isEditing) {
      this.questionService.editQuestion(this.questionId, resource).subscribe(
        (response: any) => {
          this.isEditing = false;
          this.updateQuestionOptions();
          this.questForm.resetForm();
          this.router.navigate([], { queryParams: { qId: null, optId:null }, queryParamsHandling: 'merge' });
        },
        (error: AppError) => {
          throw error;
        })
    }
  }

  editQuestion(question) {
    this.isEditing = true;
    this.addOption = false;
    this.updateOpt =false;
    this.router.navigate([], {
      queryParams: { qId: question._id, optId: null },
      queryParamsHandling: 'merge'
    });
    this.questionForm.patchValue({
      question: question.question,
      questionType: question.question_type
    })
  }

  deleteQuestion(question) {
    this.questionService.deleteQuestion(question.Question._id).subscribe(response => {
      this.updateQuestionOptions();
      this.router.navigate([], { queryParams: { qId: null, optId:null }, queryParamsHandling: 'merge' });
    });
  }

  addOptionToggler(question) {
    this.addOption = true;
    this.currentQuestion = question.question;
    this.router.navigate([], { queryParams: { qId: question._id, optId:null }, queryParamsHandling: 'merge' });
  }

  updateOption(message){
    if (message === "UPDATE_OPTION") {
      this.updateOpt = true;
    } else if (message === 'DELETE_OPTION') {
      this.router.navigate([], { queryParams: { optId:null }, queryParamsHandling: 'merge' });
      this.updateQuestionOptions();
    }
  }
  
  optionEvents(message) {
    if (message === "addNextQuestion") {
      this.addOption = false;
      this.updateOpt = false;
    } else if (message === 'optionChanged') {
      this.updateOpt = false;
      this.updateQuestionOptions();
    }
    this.router.navigate([], {
      queryParams: { optId: null },
      queryParamsHandling: 'merge'
    });
  }


  updateQuestionOptions() {
    this.surveyService.getSurvey(this.surveyId).subscribe(response => {
      this.questionSet = [];
      response['questionOptions'].forEach(val => this.questionSet.push(Object.assign({}, val)));
    });
  }
}

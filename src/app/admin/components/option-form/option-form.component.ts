import { OptionService } from './../../services/option.service';
import { Component, ViewChild, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppError } from 'src/app/shared/components/http-error-components/app-error';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.css']
})
export class OptionFormComponent implements OnInit{

  @ViewChild('optForm') public optForm: NgForm;
  @Output() eventEmitter = new EventEmitter();
  @Input() updateOption:boolean;
  questionId;
  optionId;
  currentOption;
  optionForm: FormGroup;


  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private optionService: OptionService) {

    this.optionForm = formBuilder.group({
      optionLabel: formBuilder.control('',[Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.questionId = params['qId'];
      this.optionId = params['optId'];
    });
    if(this.updateOption) {
      this.optionService.getOption(this.optionId).subscribe(response=> {
        this.currentOption = response;
        this.optionForm.patchValue({
          optionLabel: this.currentOption.option_label
        })
      })
    }
  }
 
  get option() {
    return this.optionForm.get('question_type');
  }

  addOption() {
    let resource = {
      question_id: this.questionId,
      option_label: this.optionForm.value.optionLabel
    }
    if (this.optionForm.valid && !this.updateOption) {
      this.optionService.createOption(resource)
        .subscribe(
          (response: any) => {
            this.optForm.resetForm();
            this.eventEmitter.emit('optionChanged');
          },
          (error: AppError) => {
            throw error;
          })
    }else if (this.optionForm.valid && this.updateOption){
      this.optionService.editOption(this.optionId,resource)
        .subscribe(
          (response: any) => {
            this.updateOption = false;
            this.optForm.resetForm();
            this.eventEmitter.emit('optionChanged');
          },
          (error: AppError) => {
            throw error;
          })
    }
  }
  addNextQuestion() {
    this.optForm.resetForm();
    this.eventEmitter.emit("addNextQuestion");
  }
}

import { OptionService } from './../../../admin/services/option.service';
import { Router } from '@angular/router';
import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() editQuestionEmitter = new EventEmitter();
  @Output() deleteQuestionEmitter = new EventEmitter();
  @Output() AddOptionEmitter = new EventEmitter();
  @Output() OptionChangeEmitter = new EventEmitter();
  @Input() questionSet;
  constructor(private router: Router,private optionService:OptionService) {}

  editQuestion(question){
    this.editQuestionEmitter.emit(question);
  }
  AddOptionToggler(question){
    this.AddOptionEmitter.emit(question);
  }
  deleteQuestion(question){
    this.deleteQuestionEmitter.emit(question);
  }
  updateOption(question,option){
    this.router.navigate([], {
      queryParams: { qId: question._id, optId: option._id },
      queryParamsHandling: 'merge'
    });
    this.OptionChangeEmitter.emit("UPDATE_OPTION");
  }
  deleteOption(option){
    this.optionService.deleteOption(option._id).subscribe(response=>{
      this.OptionChangeEmitter.emit("DELETE_OPTION");
    })
  }
}

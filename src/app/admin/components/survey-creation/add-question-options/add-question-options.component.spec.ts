import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionOptionsComponent } from './add-question-options.component';

describe('AddQuestionOptionsComponent', () => {
  let component: AddQuestionOptionsComponent;
  let fixture: ComponentFixture<AddQuestionOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

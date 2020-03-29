import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurComponent } from './create-sur.component';

describe('CreateSurComponent', () => {
  let component: CreateSurComponent;
  let fixture: ComponentFixture<CreateSurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

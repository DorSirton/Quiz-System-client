/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportQuestionsQuizesComponent } from './report-QuestionsQuizes.component';

describe('ReportQuestionsQuizesComponent', () => {
  let component: ReportQuestionsQuizesComponent;
  let fixture: ComponentFixture<ReportQuestionsQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportQuestionsQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportQuestionsQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

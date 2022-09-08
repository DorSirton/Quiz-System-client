/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultQuizComponent } from './resultQuiz.component';

describe('ResultQuizComponent', () => {
  let component: ResultQuizComponent;
  let fixture: ComponentFixture<ResultQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

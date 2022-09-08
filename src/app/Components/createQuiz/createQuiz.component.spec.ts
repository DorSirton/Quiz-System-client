/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

<<<<<<<< HEAD:src/app/Components/createQuiz/createQuiz.component.spec.ts
import { CreateQuizComponent } from './createQuiz.component';

describe('CreateQuizComponent', () => {
  let component: CreateQuizComponent;
  let fixture: ComponentFixture<CreateQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuizComponent ]
========
import { PreviewQuizComponent } from './previewQuiz.component';

describe('PreviewQuizComponent', () => {
  let component: PreviewQuizComponent;
  let fixture: ComponentFixture<PreviewQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewQuizComponent ]
>>>>>>>> register-quiz:src/app/Components/previewQuiz/previewQuiz.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<<< HEAD:src/app/Components/createQuiz/createQuiz.component.spec.ts
    fixture = TestBed.createComponent(CreateQuizComponent);
========
    fixture = TestBed.createComponent(PreviewQuizComponent);
>>>>>>>> register-quiz:src/app/Components/previewQuiz/previewQuiz.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

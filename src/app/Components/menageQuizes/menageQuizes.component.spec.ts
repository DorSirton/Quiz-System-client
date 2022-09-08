/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenageQuizesComponent } from './menageQuizes.component';

describe('MenageQuizesComponent', () => {
  let component: MenageQuizesComponent;
  let fixture: ComponentFixture<MenageQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenageQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

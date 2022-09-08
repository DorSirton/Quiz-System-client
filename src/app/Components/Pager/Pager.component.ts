import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import StudentAnswer from 'src/app/Data/Models/studentAnswers.module';


@Component({
  selector: 'app-Pager',
  templateUrl: './Pager.component.html',
  styleUrls: ['./Pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() count: number | undefined;
  @Input() page: number | undefined;
  @Input() studentAnswersSelected: StudentAnswer[] = [];

  @Output() changePage = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();
  @Output() prve = new EventEmitter<number>();
  @Output() finishQuiz = new EventEmitter<number>();


  range: number[] = []

  constructor(
  ) { }

  ngOnInit() {
    if (this.count !== undefined)
      for (let index = 0; index < this.count; index++) {
        this.range.push(index + 1);
      }


  }

  onChangePage(page: number) {
    this.changePage.emit(page);
  }

  onNext() {
    this.next.emit();
  }

  onPrve() {
    this.prve.emit()
  }

  ShowFinishbutton() {
    this.finishQuiz.emit();
  }
}

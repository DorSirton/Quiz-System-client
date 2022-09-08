import { Component, OnInit } from '@angular/core';
import AppService from 'src/app/core/app.service';
import QuizResult from 'src/app/Data/Models/quizResult';
import QuizService from 'src/app/Services/quiz.service';
import StudentQuizService from 'src/app/Services/studentQuiz.service';

@Component({
  selector: 'app-resultQuiz',
  templateUrl: './resultQuiz.component.html',
  styleUrls: ['./resultQuiz.component.css']
})
export class ResultQuizComponent implements OnInit {

  quizResult: QuizResult | null = null;

  constructor(
    private appService: AppService,
    private studentQuizService: StudentQuizService
  ) { }

  async ngOnInit() {
    const studentQuizId = this.appService.getCurrentStudentQuizId();
    this.studentQuizService.result(studentQuizId)
      .subscribe(quizResult => this.quizResult = quizResult as QuizResult);
  }

}

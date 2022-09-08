import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Answer from 'src/app/Data/Models/answer.module';
import Institue from 'src/app/Data/Models/institute.module';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.module';
import Student from 'src/app/Data/Models/student.module';
import AnswersService from 'src/app/Services/answers.service';
import QuestionsService from 'src/app/Services/questions.service';
import StudentAnswerService from 'src/app/Services/studentAnswer.service';


@Component({
  selector: 'app-quizQuestion',
  templateUrl: './quizQuestion.component.html',
  styleUrls: ['./quizQuestion.component.css']
})
export class QuizQuestionComponent implements OnInit {

  @Input() index: number | undefined;
  @Input() question: Question | undefined;
  @Input() answers: Answer[] | undefined;
  //@Input() student: Student | undefined;


  @Output() selectAnswer = new EventEmitter<any>();
  quiz: Quiz = new Quiz("", "", "", "", 0);

  student: Student | undefined;
  answer: Answer[] = [];
  selectedAnswer: number = 0;

  // @Output() changeAnswer = new EventEmitter<number>();

  constructor(
    private questionsService: QuestionsService,
    private answersService: AnswersService,
    private StudentAnswer: StudentAnswerService
  ) { }

  ngOnInit() {
    if (!this.question?.Id)
      return;



  }

  onSelectedAnswer(answerId: string) {
    this.selectAnswer.emit({ answerId });
  }

}

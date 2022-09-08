import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Answer from 'src/app/Data/Models/answer.module';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.module';
import Student from 'src/app/Data/Models/student.module';
import StudentAnswer from 'src/app/Data/Models/studentAnswers.module';
import AnswersService from 'src/app/Services/answers.service';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';
import StudentAnswerService from 'src/app/Services/studentAnswer.service';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import StudentQuizService from 'src/app/Services/studentQuiz.service';

@Component({
  selector: 'app-Quiz',
  templateUrl: './Quiz.component.html',
  styleUrls: ['./Quiz.component.css']
})
export class QuizComponent implements OnInit {

  studentAnswersSelected: StudentAnswer[] = [];

  student: Student | undefined;
  answers: Answer[] | undefined;
  currentIndex: number | undefined;
  currentQuestion: Question | undefined;
  quiz: Quiz = new Quiz("", "", "", "", 0)
  questionsCount: number | undefined;
  currentPage: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private questionsService: QuestionsService,
    private answersService: AnswersService,
    private appService: AppService,
    private studentAnswerService: StudentAnswerService,
    private studentQuizService: StudentQuizService
  ) {

  }

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const quizCode = params["quizeCode"]
      await this.initilazeQuizData(quizCode);
      await this.initilazeSelectedAnswers();
      


    })
  }

  async initilazeQuizData(quizCode: string) {

    this.quiz = await this.getQuizByQuizeCode(quizCode);
    if (!this.quiz) {
      console.log('missing quiz');
      return;
    }
    
    this.quizIsActive(this.quiz.Id);


    this.quiz.Questions = await this.getQuizQuestions(this.quiz.Id);
    this.quiz.IsActive = true;////

    const firstIndex = 1;
    this.currentIndex = firstIndex;
    this.currentQuestion = this.quiz.Questions[firstIndex - 1];
    this.answers = await this.getAnswers(this.currentQuestion?.Id);

    // pager params
    this.questionsCount = this.quiz.Questions.length;
    this.currentPage = firstIndex;


  }

  async initilazeSelectedAnswers() {
    const studentQuizId = this.appService.getCurrentStudentQuizId();
    await this.studentAnswerService.getStudentAnswers(studentQuizId)
      .subscribe((studentAnswers: any[]) => {
        studentAnswers.forEach(studentAnswer => {
          let foundCheckedAnswer = this.answers?.find(answer => answer.Id === studentAnswer.Answer_Id)
          if (foundCheckedAnswer)
            foundCheckedAnswer.Checked = true;

          this.studentAnswersSelected.push(studentAnswer);
        })
      });
  }


   quizIsActive(quizId:string){
    this.quizService.ChangeQuizActivity(quizId).subscribe(item=>
      console.log(item))
   }

  GoToFinishQuiz() {

    Swal.fire({
      title: "Are You Sure You Want To Finish This Quiz?",
      text: "After you click finish you can't go back..",
      icon: "warning",
      confirmButtonColor: "green",
      confirmButtonText: "Send",
      showCancelButton: true,
    }).then(async (result: any) => {
      debugger
      if (result.value) {
        const studentQuizId = this.appService.getCurrentStudentQuizId();
        await this.studentQuizService.finish(studentQuizId).toPromise();
        this.router.navigate(['ResultQuiz'])
      }
    })


  }

  onChangeQuestion(page: number) {
    this.currentQuestion = this.quiz.Questions[page - 1];
    this.currentPage = page;
    this.currentIndex = page;
    this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(answers => {
      this.setSelectedAnswer(answers);
      this.answers = answers;
    })

  }

  onNext() {
    if (!this.currentPage)
      return

    if (this.currentPage == this.questionsCount)
      return

    this.currentPage++;
    this.currentQuestion = this.quiz.Questions[this.currentPage - 1];

    this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(answers => {
      this.setSelectedAnswer(answers);
      this.answers = answers;
    })

  }

  onPrve() {
    if (!this.currentPage)
      return

    if (!this.questionsCount)
      return

    if (this.currentPage === 1)
      return

    this.currentPage--;
    this.currentQuestion = this.quiz.Questions[this.currentPage - 1];

    this.questionsService.getAnswers(this.currentQuestion?.Id).subscribe(answers => {
      this.setSelectedAnswer(answers);
      this.answers = answers;
    })
  }

  onSelectedAnswer({ answerId }: { answerId: string }) {
    if (!this.currentQuestion || !this.currentQuestion.Id)
      return;

    const studentQuizId = this.appService.getCurrentStudentQuizId();
    if (!studentQuizId)
      return;

    this.answersService.CreateStudentAnswer(studentQuizId, this.currentQuestion?.Id, answerId)
      .subscribe(result => {
        _.remove(this.studentAnswersSelected, { Qustion_Id: this.currentQuestion?.Id });
        this.studentAnswersSelected.push(result.createdStudentAnswer);

        if (this.answers) {
          this.setSelectedAnswer(this.answers);
        }
      });
  }

  private async getQuizByQuizeCode(quizCode: string): Promise<any> {
    return this.quizService.getQuizByQuizeCode(quizCode).toPromise();
  }

  private async getQuizQuestions(quizId: string): Promise<any> {
    return this.quizService.getQuizQuestions(quizId).toPromise();
  }

  private async getAnswers(questionId: string): Promise<any> {
    return this.questionsService.getAnswers(questionId).toPromise();
  }

  private setSelectedAnswer(answers: Answer[]) {
    const currentStudentAnswer = this.studentAnswersSelected.find(studentAnswer => studentAnswer.Qustion_Id === this.currentQuestion?.Id);
    if (!currentStudentAnswer)
      return;

    answers?.forEach((answer: Answer) => {
      if (answer.Id === currentStudentAnswer.Answer_Id)
        answer.Checked = true;
      else
        answer.Checked = false;
    })
  }
}


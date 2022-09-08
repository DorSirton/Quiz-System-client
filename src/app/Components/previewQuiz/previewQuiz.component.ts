import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Quiz from 'src/app/Data/Models/quiz.module';
import QuizService from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-previewQuiz',
  templateUrl: './previewQuiz.component.html',
  styleUrls: ['./previewQuiz.component.css']
})
export class PreviewQuizComponent implements OnInit {
  quizeCode: string = ""
  quizToStart: Quiz = new Quiz("", "", "", "", 0);
  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quizeCode = params["quizeCode"]
      this.quizService.getQuizByQuizeCode(this.quizeCode ).subscribe(quiz =>
        this.quizToStart = quiz);
    })
  }


  GoToStartQuiz() {
    this.router.navigate(['Quiz'], { queryParams: { quizeCode: this.quizeCode } });
  }

}

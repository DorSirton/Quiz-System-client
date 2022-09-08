import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Quiz from 'src/app/Data/Models/quiz.module';
import QuizService from 'src/app/Services/quiz.service';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-report-query',
  templateUrl: './report-query.component.html',
  styleUrls: ['./report-query.component.css']
})
export class ReportQueryComponent implements OnInit {

  from: Date | null = null;
  to: Date | null = null;
  selectesQuiz: Quiz | null = null;
  filteredQuizes: Quiz[] = [];

  constructor(
    private appService: AppService,
    private quizService: QuizService,
    private router: Router
  ) { }

  async ngOnInit() {
    const institute = this.appService.getInstitute();
    const quizSubject = this.appService.getSubject();
    this.filteredQuizes = await this.quizService.getByQuery({ institute, quizSubject }).toPromise();
  }

  async onGenerateReport() {
    console.log(this.from);
    console.log(this.to);
    console.log(this.selectesQuiz);
    this.router.navigate(['ReportsQuizes'], {
      queryParams: {
        from: this.from,
        to: this.to,
        quiz: this.selectesQuiz
      }
    });


  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Quiz from 'src/app/Data/Models/quiz.module';
import QuizService from 'src/app/Services/quiz.service';
import { ReportService } from 'src/app/Services/report.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-report-quizes',
  templateUrl: './report-quizes.component.html',
  styleUrls: ['./report-quizes.component.css']
})
export class ReportQuizesComponent implements OnInit {

  avgGrade: number = 0;
  numberOfRespondentsPassed: number = 0;
  from: Date | undefined;
  to: Date | undefined;
  reports: any[] = [];
  quiz: Quiz = new Quiz("", "", "", "", 0)

  constructor(
    private reportService: ReportService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async (queryParam) => {
      const from = queryParam['from']
      const to = queryParam['to']
      const quizId = queryParam['quiz']

      this.from = from;
      this.to = to;

      const quizRef = await this.quizService.getQuizById(quizId).toPromise();
      this.quiz = quizRef;
      const reports = await this.reportService.get({ from, to, quizId }).toPromise();
      this.reports = reports as any[];

      let totalGrade = 0;
      this.reports.forEach(report => {
        if (report.passed)
          this.numberOfRespondentsPassed++;

        totalGrade += report.grade;
      })

      this.avgGrade = totalGrade / this.reports.length;

    });

  }

}

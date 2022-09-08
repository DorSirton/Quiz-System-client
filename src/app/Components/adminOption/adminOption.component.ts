import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Institue from 'src/app/Data/Models/institute.module';
import QuizSubjects from 'src/app/Data/Models/quiz.subjects.module';
import AdminService from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminOption',
  templateUrl: './adminOption.component.html',
  styleUrls: ['./adminOption.component.css']
})

export class AdminOptionComponent implements OnInit {
  institutesOptions: Institue[] = [];
  quizSubjects: QuizSubjects[] = [];
  selectedInstitute: string = "";
  selectedSubject: string = "";
  constructor(private adminService: AdminService, private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.adminService.GetAllInstitutes().subscribe(data => { this.institutesOptions = data });
    this.adminService.GetAllSubjects().subscribe(data => { this.quizSubjects = data })

  }
  GoToManageQuizesPage() {

    if (this.selectedInstitute === "" || this.selectedSubject === "")
      return;
    this.appService.setInstitute(this.selectedInstitute);
    this.appService.setSubject(this.selectedSubject);
    this.router.navigate(['ManageQuizes'], { queryParams: { instituteID: this.selectedInstitute, subjectID: this.selectedSubject } })
  }
  GoToReportsPage() {
    if (this.selectedInstitute === "" || this.selectedSubject === "")
      return;
    this.router.navigate(['ReportsQuery'])
  }
  GoToManageQuestionPage() {
    this.router.navigate(['ManageQuestions'])
  }

}

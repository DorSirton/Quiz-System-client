import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Student from 'src/app/Data/Models/student.module';
import StudentsService from 'src/app/Services/students.service';

@Component({
  selector: 'app-registerQuiz',
  templateUrl: './registerQuiz.component.html',
  styleUrls: ['./registerQuiz.component.css']
})
export class RegisterQuizComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "";
  quizeCode: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  GoToRegisterQuizeCode() {

    const student: Student = {
      First_Name: this.firstName,
      Last_Name: this.lastName,
      Email: this.email,
      phone: this.phone,

    }

    this.studentsService.create(student).subscribe((createdStudent) => {
      console.log(createdStudent);
      this.appService.setCurrentStudent(createdStudent as Student);
      this.router.navigate(['RegisterQuizeCode'], { queryParams: { firstName: this.firstName, lastName: this.lastName, email: this.email, phone: this.phone } })

    });

  }

}

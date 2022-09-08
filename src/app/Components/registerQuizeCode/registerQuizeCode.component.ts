import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Student from 'src/app/Data/Models/student.module';
import StudentQuiz from 'src/app/Data/Models/StudentQuize.module';
import QuizService from 'src/app/Services/quiz.service';
import StudentQuizService from 'src/app/Services/studentQuiz.service';

@Component({
  selector: 'app-registerQuizeCode',
  templateUrl: './registerQuizeCode.component.html',
  styleUrls: ['./registerQuizeCode.component.css']
})
export class RegisterQuizeCodeComponent implements OnInit {

  quizeCode: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService,
    private quizService: QuizService,
    private studentQuiz: StudentQuizService
  ) { }

  ngOnInit() {
  }


  GoToPreviewQuiz(quizeCode: string) {
    const currentStudent = this.appService.getCurrentStudent();
    this.quizService.getQuizByQuizeCode(quizeCode).subscribe(quiz => {

      const studentQuiz: StudentQuiz = {
        Quiz_Id: quiz.Id,
        Student_Id: currentStudent?.id || ''
      }

      this.studentQuiz.create(studentQuiz).subscribe((creatredStudentQuiz: any) => {
        console.log(creatredStudentQuiz);
        if (!creatredStudentQuiz.createdStudentQuiz || !creatredStudentQuiz.createdStudentQuiz.Id)
          return

        this.appService.setCurrentStudentQuizId(creatredStudentQuiz?.createdStudentQuiz.Id)
        this.router.navigate(['PreviewQuiz'], { queryParams: { quizeCode: quizeCode } })
      });

    });



  }
}

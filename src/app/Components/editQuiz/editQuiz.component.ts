import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AppService from 'src/app/core/app.service';
import Question from 'src/app/Data/Models/question.module';
import Quiz from 'src/app/Data/Models/quiz.module';
import QuestionsService from 'src/app/Services/questions.service';
import QuizService from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editQuiz',
  templateUrl: './editQuiz.component.html',
  styleUrls: ['./editQuiz.component.css']
})
export class EditQuizComponent implements OnInit {

  optionalQuestionList: Question[] = [];
  quizToEdit: Quiz = new Quiz("", "", "", "", 0);
  quizToCreate: Quiz = new Quiz("", "", "", "", 0);
  instituteName: string = "";
  SubjectName: string = "";
  quizId:string ="";
  questionOfTheQuizToCreate:Question[] = [];
  newQuestionArray : string[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuestionsService,
    private appService: AppService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quizId = params["quizId"];
      if (!this.quizId) {
        this.quizToEdit = this.quizToCreate;
        this.quizToEdit.Institue_Name = this.appService.getInstitute();
        this.quizToEdit.Quiz_Subject = this.appService.getSubject();
        this.InitQuestions();
        this.GetAllQuestionForEdditing();
        return
      }
      this.quizService.getQuizById(this.quizId).subscribe
        (quiz => {
          this.quizToEdit = quiz;
          this.InitQuestions();
          this.GetAllQuestionForEdditing();
        })
    })

  }

  InitQuestions() {
    if(this.quizId){
      this.quizService.getQuizQuestions(this.quizToEdit.Id).subscribe((questions) => {
        this.quizToEdit.Questions = questions
      })
    }
    else{
      this.quizToEdit.Questions = this.questionOfTheQuizToCreate;
    }
  }
  GetAllQuestionForEdditing() {
    this.questionService.GetAllQuestions().subscribe((questions) =>
      this.optionalQuestionList = questions
    )
    console.log(this.optionalQuestionList)
  }
  AddQuestionToQuiz(question: Question, quiz: Quiz) {
    console.log(question.Id)
    if(this.quizId){
      this.quizService.AddQuestionToQuiz(question.Id, quiz.Id).subscribe(
        {
          next: (addedQuestionID) => {
            if (addedQuestionID && addedQuestionID == question.Id) {
              question.Disabeld = true;
              this.quizToEdit.Questions.push(question);
            }
          },
          error: (err) => console.log(err)
        }
      )
    }
    else{
      this.questionService.getQuestionsById(question.Id).subscribe(item =>{
        if(!this.questionOfTheQuizToCreate.some((question)=>question.Id === item.Id)){
          this.questionOfTheQuizToCreate.push(item);
          this.newQuestionArray.push(item.Id)
        }})
    }
  }
  Back(){
    if(this.quizId){
      this.router.navigate(['ManageQuizes'], { queryParams: { instituteID: this.quizToEdit.Institue_Name, subjectID: this.quizToEdit.Quiz_Subject} })
    }
    else{
      this.quizToEdit.Institue_Name = this.appService.getInstitute();
      this.quizToEdit.Quiz_Subject = this.appService.getSubject();
      this.router.navigate(['ManageQuizes'], { queryParams: { instituteID:this.quizToEdit.Institue_Name,subjectID: this.quizToEdit.Quiz_Subject} })
      
    }
  }
  RemoveQuestionFromQuiz(question: Question, quiz: Quiz) {
    if(this.quizId){
      this.quizService.removeQuestionFromQuiz(question.Id, quiz.Id).subscribe(
        {
          next: (removedQuestionID) => {
            if (removedQuestionID && removedQuestionID == question.Id) {
              question.Disabeld = false;
              const questionIndex = this.quizToEdit.Questions.indexOf(question);
              this.quizToEdit.Questions.splice(questionIndex, 1);
            }
          },
        }
      )
    }
    else{
      const questionIndex = this.quizToEdit.Questions.indexOf(question);
      this.questionService.getQuestionsById(question.Id).subscribe(item =>
        this.questionOfTheQuizToCreate.splice(questionIndex, 1));
        this.newQuestionArray.splice(questionIndex,1)
    }
  }
  Save() {
    
    Swal.fire({
      title: "Are You Sure You Want To Edit This Quiz?",
      text: "After Confirming, this Quiz Will Be Save with is New Data, Paramantely..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "Edit",
      cancelButtonText: "Cancle",
      cancelButtonColor: "grey",
    }).then((result: any) => {
      if (result.value) {
        if(this.quizId){
          const quiz: any = Object.assign({}, this.quizToEdit);
          quiz.Questions = quiz.Questions.map((item: any) => item.Id)
          this.quizService.EditQuiz(this.quizToEdit.Id, quiz).subscribe(res => {
            Swal.fire(
              "Updated!",
              `${this.quizToEdit.Name} was Updated sucssefully!`,
              "success"
            )
            this.router.navigate(['ManageQuizes'], { queryParams: { instituteID: quiz.Institue_Name, subjectID: quiz.Quiz_Subject} })
          })
        }
        else{
          const date:Date = new Date()
          
          console.log(this.quizToEdit);
          const newToPut = {
            Id: this.quizToEdit.Id,
            Quiz_Code: this.quizToEdit.Quiz_Code,
            Name: this.quizToEdit.Name,
            Intrudaction: this.quizToEdit.Intrudaction,
            Institue_Name: this.quizToEdit.Institue_Name,
            Quiz_Subject: this.quizToEdit.Quiz_Subject,
            Questions: this.newQuestionArray,
            Passing_Grade: this.quizToEdit.Passing_Grade,
            Aproached_Students_Id: this.quizToEdit.Aproached_Students_Id,
            Last_Updated: date.toString(),
            IsActive: false,
            Header: this.quizToEdit.Header,
            Messege_If_Past: this.quizToEdit.Messege_If_Past,
            Messege_If_Faild: this.quizToEdit.Messege_If_Faild
          }
          this.quizService.AddNewQuiz(newToPut).subscribe(res => {
            Swal.fire(
              "Updated!",
              `${newToPut.Name} was Updated sucssefully!`,
              "success"
            )
            this.router.navigate(['ManageQuizes'], { queryParams: { instituteID: newToPut.Institue_Name, subjectID: newToPut.Quiz_Subject} })
          })
        }
      }
      
    })
 
  }
}

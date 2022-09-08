import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Quiz from 'src/app/Data/Models/quiz.module';
import QuizService from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';
import {MatPaginatorModule} from '@angular/material/paginator'
@Component({
  selector: 'app-menageQuizes',
  templateUrl: './menageQuizes.component.html',
  styleUrls: ['./menageQuizes.component.css']
})
export class MenageQuizesComponent implements OnInit {

  quizes: Quiz[] = [];
  newArrayAfterFilter:Quiz[] = [];
  selectedInstitute: string = "";
  selectedSubject: string = "";

  constructor(private quizService: QuizService, private router:Router, private route:ActivatedRoute) {

  }

   ngOnInit() {

    this.route.queryParams.subscribe(params=>{
      this.selectedInstitute = params["instituteID"];
      this.selectedSubject = params["subjectID"];
    })
    this.quizService.getAllQuizes().subscribe(data =>{
      this.quizes = data;
      console.log(this.quizes)
      this.newArrayAfterFilter = this.quizes.filter((quiz:Quiz)=>quiz.Institue_Name === this.selectedInstitute && quiz.Quiz_Subject === this.selectedSubject);
    })
  }
  getNumberOfQuestions(quiz:Quiz):number{
    return quiz.Questions.length;
  }
  getNumberOfSubmitions(quiz:Quiz):number{
    return quiz.Aproached_Students_Id.length
  }
  GoToAdminPage(){
    this.router.navigate(['AdminOptions']);
  }
  CreateQuizPage(){
    this.router.navigate(['EditQuiz']);
  }
  GoToEditQuizPage(quiz:Quiz){
    this.router.navigate(['EditQuiz'],{queryParams:{quizId:quiz.Id}});
  }
  DeleteAlert(quiz:Quiz){
    Swal.fire({
      title:"Are You Sure You Want To Delet This Quiz?",
      text:"After Confirming, this Quiz Will Be Delete Paramantely..",
      icon:"warning",
      showCancelButton:true,
      confirmButtonColor:"red",
      confirmButtonText:"Delete",
      cancelButtonText:"Cancle",
      cancelButtonColor:"grey",
    }).then((result:any)=>{
      if(result.value){
        this.quizService.DeleteQuizById(quiz.Id).subscribe(res=>{
          if(res.error){
            console.log(res.error);
          }
          else{
            Swal.fire(
              "DELETED!",
              `${quiz.Name} was deleted sucssefully!`,
              "success"
            )
            this.newArrayAfterFilter = this.newArrayAfterFilter.filter(quiz=> quiz.Id!==res.deletedQuizID);
          }
        })
       
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire("Canceled!", "Your Quiz is Safe :)", "error")
      }
    })
  }
}

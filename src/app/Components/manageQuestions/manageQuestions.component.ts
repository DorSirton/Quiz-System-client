import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Question from 'src/app/Data/Models/question.module';
import QuestionsService from 'src/app/Services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageQuestions',
  templateUrl: './manageQuestions.component.html',
  styleUrls: ['./manageQuestions.component.css']
})
export class ManageQuestionsComponent implements OnInit {
  questions: Question[] = [];
  constructor(private questionService: QuestionsService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.questionService.GetAllQuestions().subscribe(data => {
      this.questions = data;
      console.log(this.questions)
    })
  }
  CheckTypeSingle(question: Question) {
    if (question.SingleChoice && !question.MultipleChoice) {
      return true
    }
    else if (!question.SingleChoice && question.MultipleChoice) {
      return false;
    }
    else{
      return false;
    }
  }
  GetNumberOfQuizes(question: Question): number {
    return question.Quizes_Id.length;
  }
  DeleteAlert(question: Question) {
    Swal.fire({
      title: "Are You Sure You Want To Delet This Quiz?",
      text: "After Confirming, this Quiz Will Be Delete Paramantely..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancle",
      cancelButtonColor: "grey",
    }).then((result: any) => {
      if (result.value) {
        this.questionService.DeleteQuestion(question.Id).subscribe(res => {
          if (res.error) {
            console.log(res.error);
          }
          else {
            Swal.fire(
              "DELETED!",
              `${question.Name} was deleted sucssefully!`,
              "success"
            )
            this.questions = this.questions.filter(question => question.Id !== res.deletedQuestionId);
          }
        })

      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Canceled!", "Your Quiz is Safe :)", "error")
      }
    })
  }
  GoToEditQuestionPage(question: Question) {
    this.router.navigate(['EditQuestion'], { queryParams: { questionId: question.Id } });
  }

  GoToAdminPage() {
    this.router.navigate(['AdminOptions']);
  }


}

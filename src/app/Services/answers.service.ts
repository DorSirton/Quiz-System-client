import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Answer from "../Data/Models/answer.module";


@Injectable({
    providedIn: 'root'
})
class AnswersService {
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    CreateStudentAnswer(StudentQuizes_Id: string, Qustion_Id: string, Answer_Id: string): Observable<any> {
        return this.http.post(this.baseUrl + `/api/studentAnswers`, { StudentQuizes_Id, Qustion_Id, Answer_Id })
    }
    GetQuestionAnswers(questionId:string): Observable<any>{
        console.log(questionId);
        return this.http.get(this.baseUrl + `/api/answers/answerForQuestion/`+ questionId)
    }
    AddNewAnswer(answer:Answer):Observable<any>{
        return this.http.post(this.baseUrl + `/api/answers`, answer)
    }
    MarkAsCorrectAnswer(answer:Answer):Observable<any>{
        return this.http.post(this.baseUrl + `/api/answers/CahngeToCorrect`, answer)
    }
    ChangeAnswersState({questionId,answerId}:{questionId:string,answerId:string}):Observable<any>{
        return this.http.post(this.baseUrl + `/api/answers/ChangeAnswersState`,{questionId,answerId})
    }
    DeleteAnswer(answerId:string){
        return this.http.delete(this.baseUrl + `/api/answers/DeleteAnswer/?answerId=${answerId}`)
    }
   
}

export default AnswersService;
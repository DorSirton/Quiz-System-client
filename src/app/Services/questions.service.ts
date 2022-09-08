import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Question from "../Data/Models/question.module";


@Injectable({
    providedIn: 'root'
})
class QuestionsService {
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    GetAllQuestions(): Observable<any> {
        return this.http.get(this.baseUrl + "/api/questions");
    }
    getQuestionsById(id: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/questions/getById/`+ id)
    }
    getAnswers(questionId: string):Observable<any> {
        return this.http.get(this.baseUrl + `/api/questions/${questionId}/answers`);
    }
    getQuestionsFromQuizSubjects(quizSubject:string){
    }
    DeleteQuestion(questionId:string):Observable<any>{
        return this.http.delete(this.baseUrl + `/api/questions/deleteQuestion/` + questionId)
    }
    //DeleteQuizById(id:string):Observable<any>{
    //    return this.http.delete(this.baseUrl + `/api/questions/deleteQuiz?quizID=${id}`);
    // }






}
export default QuestionsService;
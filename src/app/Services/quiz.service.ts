import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Quiz from "../Data/Models/quiz.module";


@Injectable({
    providedIn: 'root'
})
class QuizService {

    // private headers = new HttpHeaders({"content-type":"application/json"})
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    getAllQuizes(): Observable<any> {
        return this.http.get(this.baseUrl + "/api/quizes");
    }

    getQuizQuestions(quizId: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/${quizId}/questions`);
    }

    DeleteQuizById(id: string): Observable<any> {
        return this.http.delete(this.baseUrl + `/api/quizes/deleteQuiz?quizID=${id}`);
    }
    getQuizById(id: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/getById?Id=${id}`)
    }
    getQuizByQuizeCode(quizCode: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/getByQuizeCode?quizeCode=${quizCode}`)
    }
    AddQuestionToQuiz(questionId: string, quizId: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/AddQuestionToQuizList?questionId=${questionId}&quizId=${quizId}`)
    }
    removeQuestionFromQuiz(questionId: string, quizId: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes/RemoveQuestionFromList?questionId=${questionId}&quizId=${quizId}`)
    }
    EditQuiz(quizId: string, payload: Quiz): Observable<any> {
        return this.http.put(this.baseUrl + `/api/quizes/${quizId}`, payload)
    }
    AddNewQuiz(quiz: any): Observable<any> {
        return this.http.post(this.baseUrl + `/api/quizes`, quiz)
    }

    getByQuery({ institute, quizSubject }: { institute: string, quizSubject: string }): Observable<any> {
        return this.http.get(this.baseUrl + `/api/quizes?institute=${institute}&quizSubject=${quizSubject}`);
    }
    ChangeQuizActivity(quizId: string) {
        return this.http.post(this.baseUrl + `/api/quizes/ChangeActivity`, { quizId })
    }



}
export default QuizService;
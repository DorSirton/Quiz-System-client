import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import StudentAnswer from "../Data/Models/studentAnswers.module";


@Injectable({
    providedIn: 'root'
})
class StudentAnswerService {

    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    CreateOrUpdateStudentAnswer(studentAnswers: StudentAnswer) {
        return this.http.post(this.baseUrl + `/api/studentAnswers`, studentAnswers)
    }


    getStudentAnswers(studentQuizId: string): Observable<any> {
        return this.http.get(this.baseUrl + `/api/studentAnswers?studentQuizId=${studentQuizId}`);
    }


}
export default StudentAnswerService;
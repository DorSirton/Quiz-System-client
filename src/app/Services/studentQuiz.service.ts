import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Student from "../Data/Models/student.module";
import StudentQuiz from "../Data/Models/StudentQuize.module";


@Injectable({
    providedIn: 'root'
})
class StudentQuizService {

    baseUrl: string = "http://localhost:4000";

    constructor(
        private http: HttpClient
    ) { }

    create(studentQuiz: StudentQuiz) {
        return this.http.post(this.baseUrl + `/api/studentQuizes`, studentQuiz)
    }

    result(id: string) {
        return this.http.get(this.baseUrl + `/api/studentQuizes/${id}/result`);
    }

    finish(studentQuizId: string) {
        return this.http.post(this.baseUrl + `/api/studentQuizes/${studentQuizId}/finish`, {});
    }

}
export default StudentQuizService;
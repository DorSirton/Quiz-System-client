import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Student from "../Data/Models/student.module";


@Injectable({
    providedIn: 'root'
})
class StudentsService {
    constructor(private http: HttpClient) {
    }
    baseUrl: string = "http://localhost:4000";

    create(student :Student) {
        return this.http.post(this.baseUrl + `/api/students`,student)
    } 

    getAllStudents(): Observable<any> {
        return this.http.get(this.baseUrl + "/api/studnts");
    }
    DeleteStudentById(id: number): Observable<any> {
        return this.http.delete(this.baseUrl + `/api/students/deleteStudent?quizID=${id}`);
    }


}
export default StudentsService;
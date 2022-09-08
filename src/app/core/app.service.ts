import { Injectable } from "@angular/core";
import Quiz from "../Data/Models/quiz.module";
import Student from "../Data/Models/student.module";
import StudentQuiz from "../Data/Models/StudentQuize.module";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
class AppService {
    selectedInstitute: string = "";
    selectedSubject: string = "";

    constructor(
        private localStorageService: LocalStorageService
    ) {
    }
    getInstitute() {
        return this.selectedInstitute;
    }
    setInstitute(content: string) {
        this.selectedInstitute = content;
    }
    getSubject() {
        return this.selectedSubject;
    }
    setSubject(content: string) {
        this.selectedSubject = content;
    }


    getCurrentStudent(): Student {
        const student = this.localStorageService.get('student');
        return student;
    }
    setCurrentStudent(student: Student) {
        this.localStorageService.set('student', student);
    }

    getCurrentStudentQuizId(): string {
        const studentQuizId = this.localStorageService.get('studentQuizId');
        return studentQuizId;
    }
    setCurrentStudentQuizId(studentQuizId: string) {
        this.localStorageService.set('studentQuizId', studentQuizId);
    }

}
export default AppService;
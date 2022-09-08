import { FormGroupDirective } from "@angular/forms"
import { Guid } from "guid-typescript"
import Qustion from "./question.module"
import QuizSubjects from "./quiz.subjects.module";
import Student from "./student.module";

class Quiz {
    Id: string="";
    Quiz_Code: string="";
    Questions: Qustion[] = [];
    Aproached_Students_Id:number[] = [];
    Last_Updated:string = "";
    IsActive:boolean = false;
    Header:string ="";
    Messege_If_Past:string="";
    Messege_If_Faild:string ="";
    
    constructor
    (public Name:string,
     public Intrudaction:string,
     public Institue_Name:string,
     public Quiz_Subject:string,
     public Passing_Grade:number)
     {
        this.Quiz_Code = Guid.create().toString();
        this.Id = Guid.create().toString();
    }

}
export default Quiz;

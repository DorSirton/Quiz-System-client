import { Guid } from "guid-typescript";
import QuizSubjects from "./quiz.subjects.module";

class Institue{
    
    Id : string;
    QuizSubject : QuizSubjects[] = [];
    constructor(public Name : string) {
        this.Id = Guid.create().toString();
    }
}
export default Institue; 
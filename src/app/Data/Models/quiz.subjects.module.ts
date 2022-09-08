import { Guid } from "guid-typescript";

class QuizSubjects{
    Id:string;

    constructor(public Name:string) {
        this.Id = Guid.create().toString();
    }

}
export default QuizSubjects
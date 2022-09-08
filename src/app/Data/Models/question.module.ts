import { Guid } from "guid-typescript";
import Answer from "./answer.module";

class Question{
    
    Id : string;
    SingleChoice:Boolean = true;
    MultipleChoice:Boolean = false;
    Content:string = "";
    SuplementeryContent :string = "";
    Answers:Answer[] = [];
    Quizes_Id:string[]=[];
    Disabeld:boolean = false;
    Last_Updated:string = "";
    
    constructor(public Name:string) {
      this.Id = Guid.create().toString();
    }

}
export default Question;
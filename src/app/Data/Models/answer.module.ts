import { ThisReceiver } from "@angular/compiler";
import { Guid } from "guid-typescript";

class Answer {
    Id: string;
    IsCorrect: Boolean = false;
    Checked: boolean = false;
    Qustion_Id: string ="";
    constructor(public Content: string) {
        this.Id = Guid.create().toString();
    }
}
export default Answer;
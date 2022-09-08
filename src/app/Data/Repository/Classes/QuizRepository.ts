import { Injectable } from "@angular/core";
import Quiz from "../../Models/quiz.modeule";
import IRepository from "../Interfaces/IRepository";

@Injectable({
    providedIn: 'root'
})
class QuizRepository implements IRepository {

    Get() {
        return fetch("http://localhost:3030/Quiz")
            .then(this.Succsses)
            .catch(this.Faild);
    }
    GetById(id: number) {
        return fetch("http://localhost:3030/Quizes/" + id)
            .then(this.Succsses)
            .catch(this.Faild);
    }
    Post(Quiz: Quiz) {
        return fetch("http://localhost:3030/Quizes", {
            method: "Post",
            body: JSON.stringify(Quiz),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.Succsses)
            .catch(this.Faild);

    }
    Put(QuizItem: Quiz) {
        return fetch("http://localhost:3030/Quiz/" + QuizItem.Id, {
            method: "Put",
            body: JSON.stringify(QuizItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.Succsses)
            .catch(this.Faild);

    }
    Delete(id: number) {
        return fetch("http://localhost:3030/Quiz/" + id, {
            method: "Delete"
        })
            .then(this.Succsses)
            .catch(this.Faild);
    }


    Succsses(respons: Response): any {
        if (respons.status < 350) {
            return respons.json;
        }
        else {
            throw new Error(respons.statusText)
        }
    }
    Faild(error: string) {
        console.log(error)
    }
}
export default QuizRepository;
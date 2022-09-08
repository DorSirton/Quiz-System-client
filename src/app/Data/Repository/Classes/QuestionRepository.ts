import { Injectable } from "@angular/core";
import Qustion from "../../Models/question.module";
import IRepository from "../Interfaces/IRepository";

@Injectable({
    providedIn: 'root'
  })
class QuestionRepository implements IRepository{

    Get(){
        return fetch("http://localhost:3030/Question")
        .then(this.Succsses)
        .catch(this.Faild);
    }
    GetById(id:number){
        return fetch("http://localhost:3030/Question/" + id)
            .then(this.Succsses)
            .catch(this.Faild);
    }
    Post(QuestionItem:Qustion){
        return fetch("http://localhost:3030/Question", {
            method: "Post",
            body: JSON.stringify(QuestionItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.Succsses)
            .catch(this.Faild);
    
    }
    Put(QuestionItem:Qustion){
        return fetch("http://localhost:3030/Question/"+ QuestionItem.Id,{
            method: "Put",
            body: JSON.stringify(QuestionItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(this.Succsses)
            .catch(this.Faild);
    
    }
    Delete(id:number){
        return fetch("http://localhost:3030/Question/"+ id, {
            method: "Delete"
        })
            .then(this.Succsses)
            .catch(this.Faild);
    }
    
    
    Succsses(respons:Response){
        if (respons.status < 350) {
            return respons.json();
        }
        else {
            throw new Error(respons.statusText)
        }
    }
    Faild(error:string) {
        console.log(error)
    }
}
export default QuestionRepository;

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
class AdminService {
    baseUrl: string = "http://localhost:4000";

    constructor(private http:HttpClient) {
    }
    GetAllInstitutes():Observable<any> {
        return this.http.get(this.baseUrl+ "/api/institutes");
   }
    GetAllSubjects():Observable<any> {
        return this.http.get(this.baseUrl+ "/api/quizesSubjects");
    }
}
export default AdminService;
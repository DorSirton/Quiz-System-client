import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUrl: string = "http://localhost:4000";

  constructor(
    private http: HttpClient
  ) { }

  get({ quizId, from, to }: { quizId: string, from: Date, to: Date }) {
    return this.http.get(this.baseUrl + `/api/reports?quizId=${quizId}&from=${from}&to=${to}`);
  }

}

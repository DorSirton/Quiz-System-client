import {MatPaginatorModule} from '@angular/material/paginator'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminOptionComponent } from './Components/adminOption/adminOption.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MenageQuizesComponent } from './Components/menageQuizes/menageQuizes.component';
import { PreviewQuizComponent } from './Components/previewQuiz/previewQuiz.component';
import { QuizComponent } from './Components/Quiz/Quiz.component';
import { RegisterQuizComponent } from './Components/registerQuiz/registerQuiz.component';
import { QuizQuestionComponent } from './Components/quizQuestion/quizQuestion.component';
import { EditQuizComponent } from './Components/editQuiz/editQuiz.component';
import { PagerComponent } from './Components/Pager/Pager.component';
import { RegisterQuizeCodeComponent } from './Components/registerQuizeCode/registerQuizeCode.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageQuestionsComponent } from './Components/manageQuestions/manageQuestions.component';
import { AnswersTableComponent } from './Components/answersTable/answersTable.component';
import { ResultQuizComponent } from './Components/resultQuiz/resultQuiz.component';
import { ReportQueryComponent } from './Components/report-query/report-query.component';
import { ReportQuizesComponent } from './Components/report-quizes/report-quizes.component';
import { EditQuestionComponent } from './Components/editQuestion/editQuestion.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    LoginComponent,
    AdminOptionComponent,
    MenageQuizesComponent,
    RegisterQuizComponent,
    QuizQuestionComponent,
    PreviewQuizComponent,
    EditQuizComponent,
    PagerComponent,
    RegisterQuizeCodeComponent,
    ManageQuestionsComponent,
    AnswersTableComponent,
    ResultQuizComponent,
    ReportQueryComponent,
    ReportQuizesComponent,
    EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

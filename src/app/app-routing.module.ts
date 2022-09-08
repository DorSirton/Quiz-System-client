import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOptionComponent } from './Components/adminOption/adminOption.component';
import { CreateQuizComponent } from './Components/createQuiz/createQuiz.component';
import { EditQuestionComponent } from './Components/editQuestion/editQuestion.component';
import { EditQuizComponent } from './Components/editQuiz/editQuiz.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ManageQuestionsComponent } from './Components/manageQuestions/manageQuestions.component';
import { MenageQuizesComponent } from './Components/menageQuizes/menageQuizes.component';
import { PreviewQuizComponent } from './Components/previewQuiz/previewQuiz.component';
import { QuizComponent } from './Components/Quiz/Quiz.component';
import { RegisterQuizComponent } from './Components/registerQuiz/registerQuiz.component';
import { RegisterQuizeCodeComponent } from './Components/registerQuizeCode/registerQuizeCode.component';
import { ReportQueryComponent } from './Components/report-query/report-query.component';
import { ReportQuestionsQuizesComponent } from './Components/report-QuestionsQuizes/report-QuestionsQuizes.component';
import { ReportQuizesComponent } from './Components/report-quizes/report-quizes.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { ResultQuizComponent } from './Components/resultQuiz/resultQuiz.component';


const routes: Routes = [
  { path: 'Quiz', component: QuizComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AdminOptions', component: AdminOptionComponent },
  { path: 'ManageQuizes', component: MenageQuizesComponent },
  { path: 'ManageQuestions', component: ManageQuestionsComponent },
  { path: 'EditQuiz', component: EditQuizComponent },
  { path: 'NewQuiz', component: CreateQuizComponent },
  { path: 'PreviewQuiz', component: PreviewQuizComponent },
  { path: 'ResultQuiz', component: ResultQuizComponent },
  { path: 'RegisterQuiz', component: RegisterQuizComponent },
  { path: 'RegisterQuizeCode', component: RegisterQuizeCodeComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'ReportsQuery', component: ReportQueryComponent },
  { path: 'ReportsQuizes', component: ReportQuizesComponent },
  { path: 'ReportQuestionsQuizes', component: ReportQuestionsQuizesComponent },
  { path: 'EditQuestion', component: EditQuestionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

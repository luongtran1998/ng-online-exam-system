import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
import { ExamListComponent } from './exams/exam-list/exam-list.component';
import { ExamReviewComponent } from './exams/exam-review/exam-review.component';
import { QuestionsComponent } from './exams/exam-unit/questions/questions.component';
import { ExamsComponent } from './exams/exams.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'exams', pathMatch: 'full' },
  {
    path: 'exams', component: ExamsComponent, children: [
      { path: '', component: ExamListComponent },
      { path: ':id', component: ExamDetailComponent },
      { path: ':id/start', component: QuestionsComponent },
      { path: ':id/review', component: ExamReviewComponent }
    ]
  },
  { path: 'recent-exams', component: ExamsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

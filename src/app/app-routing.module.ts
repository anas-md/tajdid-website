import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './pages/hompage/hompage.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { News1Component } from './news/news1/news1.component';
import { News2Component } from './news/news2/news2.component';
import { News3Component } from './news/news3/news3.component';
import { News4Component } from './news/news4/news4.component';
import { News5Component } from './news/news5/news5.component';
import { AdminComponent } from './login/admin/admin.component';
import { UserComponent } from './login/user/user.component';
import { RegisterComponent } from './login/register/register.component';
import { AuthClassGuard } from './auth-class.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddUserServiceComponent } from './login/add-user-service/add-user-service.component';
import { IslamicDigitalComponent } from './pages/services/islamic-digital/islamic-digital.component';
import { NfcCardComponent } from './pages/services/nfc-card/nfc-card.component';
import { FaceRecognitionComponent } from './pages/services/face-recognition/face-recognition.component';
import { SocialMediaSentimentAnalysisComponent } from './pages/services/social-media-sentiment-analysis/social-media-sentiment-analysis.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HompageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'face-recognition', component: FaceRecognitionComponent },
  { path: 'islamic-digital', component: IslamicDigitalComponent },
  { path: 'nfcCard', component: NfcCardComponent },
  {
    path: 'social-media-sentiment-analytics',
    component: SocialMediaSentimentAnalysisComponent,
  },
  { path: 'news', component: NewsComponent },
  { path: 'news1', component: News1Component },
  { path: 'news2', component: News2Component },
  { path: 'news3', component: News3Component },
  { path: 'news4', component: News4Component },
  { path: 'news5', component: News5Component },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpass', component: ResetPasswordComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthClassGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthClassGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'addUserService',
    component: AddUserServiceComponent,
    canActivate: [AuthClassGuard],
  },
  { path: 'edit_cus/:id', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollDirective } from './sharepage/nav/scroll.directive';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './sharepage/nav/nav.component';
import { HompageComponent } from './pages/hompage/hompage.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { News1Component } from './news/news1/news1.component';
import { SidebarComponent } from './sharepage/sidebar/sidebar.component';
import { News2Component } from './news/news2/news2.component';
import { News3Component } from './news/news3/news3.component';
import { News4Component } from './news/news4/news4.component';
import { News5Component } from './news/news5/news5.component';
import { AdminComponent } from './login/admin/admin.component';
import { UserComponent } from './login/user/user.component';
import { RegisterComponent } from './login/register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddUserServiceComponent } from './login/add-user-service/add-user-service.component';
import { IslamicDigitalComponent } from './pages/services/islamic-digital/islamic-digital.component';
import { NfcCardComponent } from './pages/services/nfc-card/nfc-card.component';
import { FaceRecognitionComponent } from './pages/services/face-recognition/face-recognition.component';
import { SocialMediaSentimentAnalysisComponent } from './pages/services/social-media-sentiment-analysis/social-media-sentiment-analysis.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HompageComponent,
    FooterComponent,
    NewsComponent,
    ContactComponent,
    ScrollDirective,
    LoginComponent,
    News1Component,
    SidebarComponent,
    News2Component,
    News3Component,
    News4Component,
    News5Component,
    AdminComponent,
    UserComponent,
    RegisterComponent,
    ResetPasswordComponent,
    AddUserServiceComponent,
    IslamicDigitalComponent,
    NfcCardComponent,
    FaceRecognitionComponent,
    SocialMediaSentimentAnalysisComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

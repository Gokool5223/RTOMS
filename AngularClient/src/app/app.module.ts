import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RulesComponent } from './rules/rules.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { ConfirmOtpComponent } from './confirm-otp/confirm-otp.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RtoHomeComponent } from './rto-home/rto-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { ManageExamModuleComponent } from './manage-exam-module/manage-exam-module.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    RulesComponent,
    ForgotpasswordComponent,
    OtpComponent,
    ConfirmOtpComponent,
    NewpasswordComponent,
    AdminHomeComponent,
    RtoHomeComponent,
    UserHomeComponent,
    QuestionPaperComponent,
    ManageExamModuleComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"signup", component:SignupComponent},
      {path:"aboutus",component:AboutusComponent},
      {path:"contactus",component:ContactusComponent},
      {path:"rules",component:RulesComponent},
      {path:"forgot",component:ForgotpasswordComponent},
      {path:"otp",component:OtpComponent},
      {path:"confirm-otp",component:ConfirmOtpComponent},
      {path:"newpassword",component:NewpasswordComponent},
      {path:"admin-Home",component:AdminHomeComponent},
      {path:"rto-Home",component:RtoHomeComponent},
      {path:"user-Home",component:UserHomeComponent},
      {path:"question-Paper",component:QuestionPaperComponent},
      {path:"manageExamModule",component:ManageExamModuleComponent},
      {path:"addQuestion",component:AddQuestionComponent},
      {path:"updateQuestion",component:UpdateQuestionComponent}



      


      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

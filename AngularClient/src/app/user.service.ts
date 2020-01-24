import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }
  
  register(user){

    return this.http.post("http://localhost:8080/DacAug19old/user/register",user);

  }

  addapplication(app){
    return this.http.post("http://localhost:8080/DacAug19old/user/addApplication",app);

  }
  getApplication(appId){
    return this.http.get("http://localhost:8080/DacAug19old/rto/getApplicationDetails?appId="+appId);
  }

  updateApplication(app){
    return this.http.get("http://localhost:8080/DacAug19old/user/updateUserApplication",app);
  }

  login(user)
  {
    return this.http.post("http://localhost:8080/DacAug19old/user/login",user);
  }

  forgot(user)
  {
    return this.http.post("http://localhost:8080/DacAug19old/user/forgot",user);
  }

  confirmOtp(otp)
  {
    return this.http.post("http://localhost:8080/DacAug19old/user/confirmOtp",otp);
  }


  resetPassword(data)
  {
    return this.http.post("http://localhost:8080/DacAug19old/user/resetpassword",data);
  }

  getQuestions()
  {
    return this.http.get("http://localhost:8080/DacAug19old/user/exam");

  }

  getQuestionDetails(qid)
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/questionDetails?qid="+qid);
  }

  // getMarks(answerSet,userId)
  // {
  //   console.log("inside service");
  //   console.log(answerSet);
  //   console.log(userId);
  //   // http://localhost:8080/DacAug19old/user/exam/getMarks/3
  //   return this.http.get("http://localhost:8080/DacAug19old/user/exam/getMarks?userId="+userId,answerSet)
  // }

  getMarks(answerSet)
  {
    console.log("inside service");
    console.log(answerSet);
  
    // http://localhost:8080/DacAug19old/user/exam/getMarks/3
    return this.http.post("http://localhost:8080/DacAug19old/user/exam/getMarks",answerSet);
  }

  getUser(uid)
  {
    console.log("inside User sevice");
    console.log(uid);
    return this.http.get("http://localhost:8080/DacAug19old/user/getUser?userId="+uid);


  }



}

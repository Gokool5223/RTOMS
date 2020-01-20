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



}

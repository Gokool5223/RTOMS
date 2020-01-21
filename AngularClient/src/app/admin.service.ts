import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  

  addQuestion(ques){

    return this.http.post("http://localhost:8080/DacAug19old/admin/addQuestion",ques);

  }

  deleteQuestion(id:number){

    return this.http.get("http://localhost:8080/DacAug19old/admin/deleteQuestion/"+id);

  }
  updateQues(ques)
  {
    return this.http.post("http://localhost:8080/DacAug19old/admin/updateQuestion",ques);
  }

  updateQuestion(que){

    return this.http.post("http://localhost:8080/DacAug19old/admin/updateQuestion",que);

  }
  getQuestionDetails(qid)
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/questionDetails?qid="+qid);
  }

  getQuestions()
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/questionList");

  }

  getRto()
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/rtoList")
  }

  addRto(user){

    return this.http.post("http://localhost:8080/DacAug19old/admin/registerRto",user);

  }

  deleteRto(id:number){

    return this.http.get("http://localhost:8080/DacAug19old/admin/deleteRto/"+id);

  }
  updateRto(rto)
  {
    return this.http.post("http://localhost:8080/DacAug19old/admin/updateRto",rto);
  }

  getRtoDetails(userId)
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/rtoDetails?userId="+userId);
  }




  
}

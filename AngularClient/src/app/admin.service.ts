import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  

  addQuestion(admin){

    return this.http.post("http://localhost:8080/DacAug19old/admin/addQuestion",admin);

  }

  deleteQuestion(id:number){

    return this.http.get("http://localhost:8080/DacAug19old/admin/deleteQuestion/"+id);

  }
  updateQues(ques)
  {
    return this.http.post("http://localhost:8080/DacAug19old/admin/updateQuestion",ques);
  }

  updateQuestion(admin){

    return this.http.post("http://localhost:8080/DacAug19old/admin/updateQuestion",admin);

  }
  getQuestionDetails(qid)
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/questionDetails?qid="+qid);
  }

  getQuestions()
  {
    return this.http.get("http://localhost:8080/DacAug19old/admin/questionList");

  }


  
}

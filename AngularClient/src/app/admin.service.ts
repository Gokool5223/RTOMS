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

  deleteQuestion(admin){

    return this.http.post("http://localhost:8080/DacAug19old/admin/deleteQuestion",admin);

  }

  updateQuestion(admin){

    return this.http.post("http://localhost:8080/DacAug19old/admin/updateQuestion",admin);

  }


  
}

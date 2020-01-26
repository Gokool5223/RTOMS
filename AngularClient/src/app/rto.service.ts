import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RtoService {

  constructor(private http:HttpClient) { }


  getUser(uid)
  {
    console.log("inside rto sevice");
    console.log(uid);
    return this.http.get("http://localhost:8080/DacAug19old/rto/getApplicationDetails/"+uid);


  }

  getUserlist()
  {
    return this.http.get("http://localhost:8080/DacAug19old/rto/userList")
  }
}

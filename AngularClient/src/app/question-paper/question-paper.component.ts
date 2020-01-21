import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {

  data;
  questions:any=[];
  answerSet=[];
  score;


  constructor(private service:UserService,private router:Router) { 

  }

  // getMarks(answer)
  // {
  //   console.log("in delete");
  //   console.log(answer);
  //   this.service.getMarks(answer,sessionStorage['uid']).subscribe((res)=>
  //   {
  //         })
  // }
  getdata() {
    throw new Error("Method not implemented.");
  }

  setAnswer(ans,questionId,i){
    console.log(ans+" "+questionId+" "+i);
    this.answerSet[i].questionId=questionId;
    this.answerSet[i].ans=ans;
    console.log(this.answerSet);
    
  }

  submitAnswer(){
    //debugger
    let x = this.answerSet.toString;
    console.log(x);
    this.service.getMarks(this.answerSet,sessionStorage['uid']).subscribe(res =>{
      //debugger
      this.score=res.toString();
      console.log(this.score);
    });
  }

  

  ngOnInit() 
  {
    this.service.getQuestions().subscribe((res)=>{
      this.questions=res;
      console.log(this.questions);
    })
  }

}

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
  qid;
  qans;
  score;
  y;
  ansset=[];


  constructor(private service:UserService,private router:Router) { 
    this.y=parseInt(sessionStorage.getItem('uid'));
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
    
    console.log(ans+" "+questionId+""+i);
   
    this.ansset[i]={
    "submittedAns":ans,
    "questionId":questionId,
    "userId":this.y
  }
  for (let i = 0; i < this.ansset.length; i++) 
{
   console.log(this.ansset[i]);

}

    // this.answerSet[i].questionId=questionId;
    // this.answerSet[i].ans=ans;
    // console.log(this.answerSet);
    
  }

  submitAnswer()
  {
    console.log("hey buddy");
    console.log(this.ansset);
console.log(this.y);
    this.service.getMarks(this.ansset).subscribe(res =>{
      this.score=res;
      console.log(this.score);
      alert("Your Score is "+this.score);
      this.router.navigate(['user-Home']);
    });
  }
  

  // setAnswer(ans,questionId,i){
  //   console.log(ans+" "+questionId+" "+i);
  //   this.answerSet[i].questionId=questionId;
  //   this.answerSet[i].ans=ans;
  //   console.log(this.answerSet);
    
  // }

  // submitAnswer(myForm){
  //   //debugger

  //   console.log(myForm);

  //   let data = myForm.form.value;
  //   console.log(data);
  //   this.y=parseInt(sessionStorage.getItem('uid'));


  
  //   this.service.getMarks(this.data,sessionStorage['uid']).subscribe(res =>{
  //   debugger
      
  //     this.score=res.toString();
  //     console.log(this.score);
  //   });
  // }

  

  ngOnInit() 
  {
    var id=sessionStorage.getItem('uid');
    var f=sessionStorage['userFlag'];

    console.log(id);
   console.log(f);
    if(id==null || f!="3")
    {
     
      delete sessionStorage['email'];
      delete sessionStorage['uid'];
      delete sessionStorage['flag'];
      this.router.navigate(['/login']);
    }
    this.service.getQuestions().subscribe((res)=>{
      this.questions=res;
      console.log(this.questions);
    })
  }

}

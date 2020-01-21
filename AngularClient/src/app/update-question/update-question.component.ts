import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  x:any;
  question;
  option1;
  option2;
  option3;
  option4;
  answerKey;
  Question={}
  adqid: any;
  adanskey: any;
  adop1: any;
  adop3: any;
  adop4: any;
  adop2: any;
  adquestion: any;

  constructor(public service:AdminService,public router:Router,public route:ActivatedRoute) 
  {
    this.x=this.route.snapshot.paramMap.get("qid");
    console.log(this.x);
    this.service.getQuestionDetails(this.x).subscribe((res)=>{
             console.log(res);
             this.adqid=res['qid'];
             console.log(this.adqid);
             this.adqid=res['qid'];
             this.adquestion=res['question'];
             this.adop1=res['option1'];
             this.adop2=res['option2'];
             this.adop3=res['option3'];
             this.adop4=res['option4'];
             this.adanskey=res['answerKey'];
    },(err)=>{
      alert("something went wrong");
    })
  }
updateQuestion()
  
  {
    let ques={
      "qid":this.adqid,
      "question":this.adquestion,
      "option1":this.adop1,
      "option2":this.adop2,
      "option3":this.adop3,
      "option4":this.adop4,
      "answerKey":this.adanskey  
    }
    this.service.updateQues(ques).subscribe((res)=>
    {
      if(res==1)
      {
        this.router.navigate(['manageExamModule'])
      }
    })
  }

  ngOnInit() {
  }

}

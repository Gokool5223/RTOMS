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


  constructor(private service:UserService,private router:Router) { 

  }

  ngOnInit() 
  {
    this.service.getQuestions().subscribe((res)=>{
      this.questions=res;
      console.log(this.questions);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-exam-module',
  templateUrl: './manage-exam-module.component.html',
  styleUrls: ['./manage-exam-module.component.css']
})
export class ManageExamModuleComponent implements OnInit {

  data;
  questions:any=[];

  constructor(private service:AdminService,private router:Router) { }

  deleteQuestion(question)
  {
    console.log("in delete");
    console.log(question);
    this.service.deleteQuestion(question).subscribe((res)=>
    {
      this.router.navigate(['manageExamModule']);
    })
  }

  updateQuestion(q)
  {
    console.log("in update");
    console.log(q);
    this.service.updateQuestion(q).subscribe((res)=>
    {
      this.router.navigate(['manageExamModule']);
    })
  }
  



  ngOnInit() {

    this.service.getQuestions().subscribe((res)=>{
      this.questions=res;
      console.log(this.questions);
    })

  }

}

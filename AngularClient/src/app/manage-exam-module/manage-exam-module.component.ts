import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-exam-module',
  templateUrl: './manage-exam-module.component.html',
  styleUrls: ['./manage-exam-module.component.css']
})
export class ManageExamModuleComponent implements OnInit {

  data;
  questions:any=[];

  constructor(private service:AdminService,private router:Router ) 
  { 
       this.getdata();
  }
  getdata()
  {
    this.service.getQuestions().subscribe((res)=>{
        console.log(res);
    })
  }

  deleteQuestion(question)
  { 
    console.log("in delete");
    console.log(question);
    this.service.deleteQuestion(question).subscribe((res)=>
    {
          if(res==1)
          {
            this.getdata();
            this.ngOnInit();
          }

    })
  }
  senddata(questionid)
  {
    this.router.navigate(['updateQuestion',{'qid':questionid}]);
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
    var id=sessionStorage.getItem('uid');
    var f=sessionStorage['userFlag'];

    console.log(id);
   console.log(f);
    if(id==null || f!="1")
    {
     
      delete sessionStorage['email'];
      delete sessionStorage['uid'];
      delete sessionStorage['flag'];
      this.router.navigate(['/login']);
    }
    if(this)

    this.service.getQuestions().subscribe((res)=>{

      this.questions=res;
      console.log(this.questions);
    })

  }

}

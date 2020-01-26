import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(public router:Router,public adminService:AdminService) { }

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
  }

  addQuestion(myForm)
  {
    let data=myForm.form.value;
    this.adminService.addQuestion(data).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/manageExamModule']);
      if(res==1)
          {
            this.getdata();
            this.ngOnInit();
          }
    },(error)=>{

    })
  }
  getdata() {
    throw new Error("Method not implemented.");
  }

  cancel()
  {
    this.router.navigate(['']); 
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(public service:UserService,public router:Router) { }

  ngOnInit() {
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
  }

  addApplication(appForm)
  {
    let data=appForm.form.value;
    var id=sessionStorage.getItem('uid');

    this.service.addapplication(data,id).subscribe((res)=>
    {
      this.router.navigate(['user-Home']);
    },(error)=>{

    })

  }
  cancel()
  {
    this.router.navigate(['user-Home']); 
  }

}

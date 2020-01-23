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
  }

  addApplication(appForm)
  {
    let data=appForm.form.value;
    this.service.addapplication(data).subscribe((res)=>
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

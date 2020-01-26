import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-schedule-test',
  templateUrl: './schedule-test.component.html',
  styleUrls: ['./schedule-test.component.css']
})
export class ScheduleTestComponent implements OnInit {
  uid: string;
  value: any;
  y: number;
  

  constructor(public router:Router,public service:UserService) { }

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

  scheduleTest(myForm)
  {
    this.y=parseInt(sessionStorage.getItem('uid'));
    console.log(this.y);
  this.value=myForm;
 
  let app={
    "testDate":this.value.testDate,
    "userSchT_id":this.y
    

   
      
  }
  console.log(this.value.testDate)

  this.service.scheduleTest(app,this.y).subscribe((res)=>
  {
    this.router.navigate(['user-Home'])

  })
  }
  

}

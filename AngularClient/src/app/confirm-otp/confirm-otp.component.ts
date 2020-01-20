import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css']
})
export class ConfirmOtpComponent implements OnInit {
  data;
  constructor(private service:UserService,private router:Router) { }

  confirmOtp(myForm)
  {
    this.data=myForm.form.value;
    console.log=this.data;
    this.service.confirmOtp(this.data).subscribe((res)=>{
      this.router.navigate(['newpassword']);
    })
  }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router) { }
    data;
confirmOtp(myForm)
  {
    this.data=myForm.form.value;
    console.log=this.data;
    this.userService.confirmOtp(this.data).subscribe((res)=>{
      this.router.navigate(['/resetPassword']);
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
data;
arr;
  constructor(private service:UserService,private router:Router) { }

  confirmPassword(myForm)
  {
    this.data=myForm.form.value;
   // console.log(this.data.password);
    //console.log(this.data.confirmpassword);
   this.data.email=sessionStorage['email'];
   
   
    if(this.data.password==this.data.confirmpassword)
    {
    
     //console.log(this.data);
      this.service.resetPassword(this.data).subscribe((res)=>{
        this.router.navigate(['login'])
      })
    }

  }

  ngOnInit() {
  }

}
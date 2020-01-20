import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router) { }

  forgot(forgotForm){
    

    let data = forgotForm.form.value;

    this.userService.forgot(data).subscribe((res)=>{

    this.router.navigate(['otp']);


    
    },(err)=>{
  
      alert("Enter registered email id");
     })

  }
  
  

  
  
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { EmtrService } from '../emtr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router,private emService:EmtrService) { }

    login(loginForm)
    {
      let data = loginForm.form.value;
     this.userService.login(data).subscribe(res=>{
      sessionStorage['email']=res['email'];
      console.log(res.toString())
      this.emService.logInBtnSwitch(true);//
      if(res['role']=='ADMIN')
      {
        this.router.navigate(['admin-Home']);
      }else if(res['role']=='RTO')
      {
        this.router.navigate(['rto-Home']);
      }else if(res['role']=='USER')
      {
        this.router.navigate(['user-Home']);
      }
      
  
     },(err)=>{
  
      alert("Something went wrong");
     })
    }
  
    signup(){
      this.router.navigate(['signup']);
    }

    cancel(){
      this.router.navigate(['']);
    }
  ngOnInit() {
  }

}

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
  g: string;

  constructor(private userService:UserService,
    private router:Router,private emService:EmtrService) { }

    login(loginForm)
    {
    //  console.log(loginForm);
      let data = loginForm.form.value;
     this.userService.login(data).subscribe(res=>{
      // debugger
      sessionStorage['email']=res['email'];
      sessionStorage['uid']=res['userId'];
      this.g=sessionStorage.getItem('uid');
      sessionStorage['isLogin']=true;
      this.emService.logInBtnSwitch(true);//
      if(res['role']=='ADMIN')
      {
        sessionStorage['userFlag']="1";
        this.router.navigate(['admin-Home']);

      }else if(res['role']=='RTO'&& this.g!=null)
      {
        sessionStorage['userFlag']="2";
        this.router.navigate(['rto-Home']);
      }else if(res['role']=='USER'&& this.g!=null)
      {
        sessionStorage['userFlag']="3";
        this.router.navigate(['user-Home']);
      }else
      {
        this.router.navigate(['login']);

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

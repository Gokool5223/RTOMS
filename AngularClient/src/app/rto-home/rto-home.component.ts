import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RtoService } from '../rto.service';

@Component({
  selector: 'app-rto-home',
  templateUrl: './rto-home.component.html',
  styleUrls: ['./rto-home.component.css']
})
export class RtoHomeComponent implements OnInit {
  users: Object;
  AppId: any;
  
  app: {};


  constructor(public router:Router,public service:RtoService) { }

  getUserList()
  {
    this.service.getUserlist().subscribe((res)=>
    {
      console.log(res);
    })
    
  }
  senddata(userid)
  {
    this.router.navigate(['getapplication',{'userId':userid}]);
  }

  issue()
  {
    alert('License is sended successfully.............');
  }

  ngOnInit() {
    var id=sessionStorage.getItem('uid');
    var f=sessionStorage['userFlag'];

    console.log(id);
   console.log(f);
    if(id==null || f!="2")
    {
     
      delete sessionStorage['email'];
      delete sessionStorage['uid'];
      delete sessionStorage['flag'];
      this.router.navigate(['/login']);
    }
    if(this)

    this.service.getUserlist().subscribe((res)=>{

      this.users=res;
      console.log(this.users);
      this.app=res['application'];
      this.AppId=this.app["appId"];
      console.log(this.AppId);

    })

  }

}
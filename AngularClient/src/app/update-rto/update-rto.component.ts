import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-rto',
  templateUrl: './update-rto.component.html',
  styleUrls: ['./update-rto.component.css']
})
export class UpdateRtoComponent implements OnInit {

  x:any;
  User={}
  aduserId: any;
  aduserName: any;
  ademail: any;
  adpassword: any;
 cancel:any;

  constructor(public service:AdminService, public router:Router,public route:ActivatedRoute) { 
    this.x=this.route.snapshot.paramMap.get("userId");
    console.log(this.x);
    this.service.getRtoDetails(this.x).subscribe((res)=>
    {
      console.log(res);
      this.aduserId=res['userId'];
      this.aduserName=res['userName'];
      this.ademail=res['email'];
      this.adpassword=res['password'];

      
    },(err)=>{
      alert("Something went wrong..!!");
    })


  }

  updateRto()
  {
    let rtos={
      "userId":this.aduserId,
      "userName":this.aduserName,
      "email":this.ademail,
      "password":this.adpassword
    }
    this.service.updateRto(rtos).subscribe((res)=>
    {
      if(res==1)
      {
        this.router.navigate(['manageRto'])
      }
    })
  }


  ngOnInit() {
    var id=sessionStorage.getItem('uid');
    var f=sessionStorage['userFlag'];

    console.log(id);
   console.log(f);
    if(id==null || f!="1")
    {
     
      delete sessionStorage['email'];
      delete sessionStorage['uid'];
      delete sessionStorage['flag'];
      this.router.navigate(['/login']);
    }
  }

}

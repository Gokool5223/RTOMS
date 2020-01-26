import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-applicationform',
  templateUrl: './update-applicationform.component.html',
  styleUrls: ['./update-applicationform.component.css']
})
export class UpdateApplicationformComponent implements OnInit {
  x: any;
  y: any;
  user={};
  app={};
  Address: any;
  AadharNo: any;
  AppDate: any;
  BloodGroup: any;
  DOB: any;
  Qualification: any;
  Document: any;
  VehicleType: any;
  Gender: any;
  result: any;
  data: any;
  AppId: any;

  constructor(public service:UserService,public router:Router) { 
   // this.x=this.reout.snapshot.paramMap.get("userId");
    this.y=parseInt(sessionStorage.getItem('uid'));
    this.service.getUser(this.y).subscribe((res)=>
    {
      console.log(res);
      this.app=res['application'];
      this.AppId=this.app["appId"];
      console.log(this.AppId);
      this.Address=this.app['address'];
      this.AadharNo=this.app['aadharNo'];
      this.AppDate=this.app['appDate'];
      this.Gender=this.app['gender'];
      console.log(this.Gender);
      this.BloodGroup=this.app['bloodGroup'];
      this.DOB=this.app['dob'];
      console.log(this.DOB);
      this.Document=this.app['document'];
      this.Qualification=this.app['qualification'];
      this.VehicleType=this.app['vehicleType'];
    },(err)=>{
      alert("Something went wrong..!!");
  
    })

    
  }

  update()
  {
    console.log(this.result);
    console.log(this.data);

    let appl={
      "appId":this.AppId,
      "address":this.Address,
      "aadharNo":this.AadharNo,
      "appDate":this.AppDate,
      "gender":this.Gender,
      "bloodGroup":this.BloodGroup,
      "dob":this.DOB,
      "document":this.Document,
      "qualification":this.Qualification,
      "vehicleType":this.VehicleType
      
    }

    this.service.updateApplication(appl).subscribe((res)=>
    {
      if(res==1)
      {
        this.router.navigate(['user-Home'])
      }

    })
    
  }


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
}

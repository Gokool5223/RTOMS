import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-application',
  templateUrl: './get-application.component.html',
  styleUrls: ['./get-application.component.css']
})
export class GetApplicationComponent implements OnInit {
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
  cancel:any;
  constructor(public service:UserService,public router:Router,public route:ActivatedRoute) {
    this.x=this.route.snapshot.paramMap.get("userId");
  this.service.getUser(this.x).subscribe((res)=>
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

  goBack()
  {
    this.router.navigate([''])
 

 
  }

  ngOnInit() {
  }

}

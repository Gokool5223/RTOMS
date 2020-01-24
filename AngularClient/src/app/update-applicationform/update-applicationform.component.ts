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

  constructor(public service:UserService,router:Router,public route:ActivatedRoute) { 
   // this.x=this.route.snapshot.paramMap.get("userId");
    this.y=parseInt(sessionStorage.getItem('uid'));
    this.service.getUser(this.y).subscribe((res)=>
    {
      console.log(res);
      this.app=res['application'];
      this.Address=this.app['address'];
      this.AadharNo=this.app['aadharNo'];
      this.AppDate=this.app['appDate'];
      this.BloodGroup=this.app['bloodGroup'];
      this.DOB=this.app['dob'];
      this.Document=this.app['document'];
      this.Qualification=this.app['qualification'];
      this.VehicleType=this.app['vehicleType'];
    },(err)=>{
      alert("Something went wrong..!!");
  
    })

    
  }


  ngOnInit() {
    
  }
}

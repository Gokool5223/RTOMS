import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-rto',
  templateUrl: './manage-rto.component.html',
  styleUrls: ['./manage-rto.component.css']
})
export class ManageRtoComponent implements OnInit {

  data;
  users:any=[];

  constructor(private adminService:AdminService, private router:Router) 

  { 
    this.getdata();
}
getdata()
{
 this.adminService.getRto().subscribe((res)=>
 {
   console.log(res);
 })
}
deleteRto(rto)
  {
    console.log("in delete");
    console.log(rto);
    this.adminService.deleteRto(rto).subscribe((res)=>
    {
          if(res==1)
          {
            this.getdata();
            this.ngOnInit();
          }

    })
  }
  senddata(userid)
  {
    this.router.navigate(['updateRto',{'userId':userid}]);
  }
  updateRto(u)
  {
    console.log("in update");
    console.log(u);
    this.adminService.updateRto(u).subscribe((res)=>
    {
      this.router.navigate(['manageRto']);
    })
   
  }
  

  ngOnInit() {
    this.adminService.getRto().subscribe((res)=>{
     this.users=res;
      console.log(this.users);
  })
}

}

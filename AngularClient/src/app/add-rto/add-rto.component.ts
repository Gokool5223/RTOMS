import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rto',
  templateUrl: './add-rto.component.html',
  styleUrls: ['./add-rto.component.css']
})
export class AddRtoComponent implements OnInit {

  constructor(public service:AdminService, public router:Router) {

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
  
  addRto(myForm)
  {
    let data=myForm.form.value;
    this.service.addRto(data).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/manageRto']);
      if(res==1)
          {
            this.getdata();
            this.ngOnInit();
          }
    },(error)=>{

    })
  }
  getdata() {
    throw new Error("Method not implemented.");
  }

  cancel()
  {
    this.router.navigate(['']); 
  }



}

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

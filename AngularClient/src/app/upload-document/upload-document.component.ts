import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  constructor(public router:Router,public service:UserService) { }
  upload(docForm)
  {
    let data=docForm.form.value;
    this.service.upload(data).subscribe((res)=>
    {
      alert("document uploaded successfully");
      this.router.navigate(['user-Home'])
      
    },(err)=>{
  
      alert("Something went wrong");
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

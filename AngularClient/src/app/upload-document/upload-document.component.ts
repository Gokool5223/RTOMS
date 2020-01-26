import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  id;
  name;
 

  constructor(public router:Router,public service:UserService) {
    console.log(sessionStorage['uid'])
    this.id=sessionStorage['ud'];
    this.name="";
    
   }
   file: any;
   onFileUpload(event) {
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);
  }

  fileupload(myDoc) {
    const formdata = myDoc.form.value;
    
    console.log(formdata);
    this.service.upload(formdata,this.file).subscribe(res=>{
      console.log(res);
      this.router.navigate(['user-Home'])
    },err=>{
      console.log(err);
    });
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

import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTO Mangement System';
  isLogin:false;

  constructor(private emservice:EmtrService, public router:Router){

  }

  ngOnInit() {

    this.emservice.getEmittedValueForLogbtnSwitch()
      .subscribe(item => this.isLogin=item);

      
  }

  logout(){
    this.router.navigate(['login']);

    alert("You Logout Successfully");
   
    this.isLogin=false;
    delete sessionStorage['email'];
  }
  
}

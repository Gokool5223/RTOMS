import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTO Mangement System';
  isLogin:false;

  constructor(private emservice:EmtrService){

  }

  ngOnInit() {

    this.emservice.getEmittedValueForLogbtnSwitch()
      .subscribe(item => this.isLogin=item);

      
  }

  logout(){
    alert("In logout");
    this.isLogin=false;
    delete sessionStorage['email'];
  }
  
}

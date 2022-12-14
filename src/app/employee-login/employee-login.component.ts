import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  empEmail=""
  password=""

  constructor(private api:ApiService){}

  readValue = () =>{
    let data:any = {"empEmail":this.empEmail,"password":this.password}
    console.log(data)
    this.api.EmployeeLogin(data).subscribe(
      (response:any) => {
        console.log(response)
        if(response.status=="success")
        {
          alert("yea")
        }
        else("um")
      }
    )

  }

}

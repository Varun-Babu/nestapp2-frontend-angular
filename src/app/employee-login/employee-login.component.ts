import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  empEmail=""
  password=""

  constructor(private api:ApiService, private router:Router){}

  readValue = () =>{
    let data:any = {"empEmail":this.empEmail,"password":this.password}
    console.log(data)
    this.api.EmployeeLogin(data).subscribe(
      (response:any) => {
        console.log(response)
        if(response.status=="success")
        {
          localStorage.setItem("userInfo",response.userInfo)
          this.router.navigate(["/applyleave"])
          
        }
        else("um")
      }
    )

  }

}

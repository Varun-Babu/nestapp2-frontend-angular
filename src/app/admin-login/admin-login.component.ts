import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  
  username=""
  password=""
  constructor(private router:Router){}

  readValue = () =>{
    let data:any ={"username":this.username,"password":this.password}
    console.log(data)
    if(this.username == "admin" && this.password == "admin"){
      alert("login successfull")
      this.router.navigate(["/addEmployee"])

    }
    else{
      alert("oops invalid credentials")
    }
  }

}

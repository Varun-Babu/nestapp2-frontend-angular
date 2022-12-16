import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empName=""
  empDesignation=""
  empPhone=""
  empEmail=""
  username=""
  password=""
  confPassword=""

  constructor(private api:ApiService){}

  readValue = () => {
    let data:any = {"empName":this.empName,"empDesignation":this.empDesignation,"empPhone":this.empPhone,"empEmail":this.empEmail,"username":this.username,"password":this.password,"confPassword":this.confPassword}
    console.log(data)
    this.api.AddEmployee(data).subscribe(
      (response:any) => {
        console.log(response)
        if(response.status == "success"){
          alert("employee Created")
          this.empName=""
          this.empDesignation=""
          this.empPhone=""
          this.empEmail=""
          this.username=""
          this.password=""
          this.confPassword=""
        }
        else{
          alert("oops something went wrong")
        }
      }
    )
  }
}

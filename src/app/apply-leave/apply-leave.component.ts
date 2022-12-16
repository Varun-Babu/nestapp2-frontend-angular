import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  empId:any = ""
  type = ""
  description = ""
  leaveDate = ""
  leaveDetails:any = []
  constructor(private api:ApiService, private router:Router){
      localStorage.getItem("userInfo")
    this.empId = localStorage.getItem("userInfo")
    console.log(this.empId)
    api.LeaveDetails(this.empId).subscribe(
      (response:any)=>{
        this.leaveDetails = response
      }
    )
  }

  readValue = ()=>{
    let data:any = {"empId":this.empId,"type":this.type,"description":this.description,"leaveDate":this.leaveDate}
    console.log(data)
    this.api.ApplyLeave(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Leave Request Submitted Successfully")
        
          
        }else{
          alert("You don't have enough leaves")
        }
      }
    )
  }

  

}
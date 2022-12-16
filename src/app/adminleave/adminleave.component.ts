import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminleave',
  templateUrl: './adminleave.component.html',
  styleUrls: ['./adminleave.component.css']
})
export class AdminleaveComponent {

  constructor(private api:ApiService){
    let data:any = {
      "id": localStorage.getItem("userInfo")
    }
    console.log(data)
    api.LeaveDetailsId(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.leave=response
      }
    )
  }
  leave:any = []
  loading:boolean = true
  

}

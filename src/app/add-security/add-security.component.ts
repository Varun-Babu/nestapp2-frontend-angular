import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
  name=""
  address=""
  username=""
  password=""
  

  constructor(private api:ApiService){}

  readValue = () => {
    let data:any = {"name":this.name,"username":this.username,"password":this.password,"address":this.address}
    console.log(data)
    this.api.AddSecurity(data).subscribe(
      (response:any) => {
        console.log(response)
        if(response.status == "success"){
          alert("employee Created")
          this.name=""
          this.address=""
          this.username=""
          this.password=""
        
        }
        else{
          alert("oops something went wrong")
        }
      }
    )
  }

}

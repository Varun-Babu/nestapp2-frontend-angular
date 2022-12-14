import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  AddEmployee = (data:any) =>{
    return this.http.post("http://localhost:8008/add",data)
  }
  ViewEmployee = () =>{
    return this.http.get("http://localhost:8008/view")
  }
  SearchEmployee = (data:any) =>{
    return this.http.post("http://localhost:8008/search",data)
  }
  DeleteEmployee = (data:any) =>{
    return this.http.post("http://localhost:8008/delete",data)
  }
  SearchSecurity = (data:any) =>{
    return this.http.post("http://localhost:8008/searchSecurity",data)
  }
  DeleteSecurity = (data:any) =>{
    return this.http.post("http://localhost:8008/deleteSecurity",data)
  }
  AddSecurity = (data:any) =>{
    return this.http.post("http://localhost:8008/addSecurity",data)
  }
  ViewSecurity = () =>{
    return this.http.get("http://localhost:8008/viewSecurity")
  }
  EmployeeLogin = (data:any) =>{
    return this.http.post("http://localhost:8008/employeelogin",data)
    
  }
  

}

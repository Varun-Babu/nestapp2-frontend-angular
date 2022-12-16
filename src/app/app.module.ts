import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { HomeComponent } from './home/home.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmployeenavComponent } from './employeenav/employeenav.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { SecurityLogViewComponent } from './security-log-view/security-log-view.component';
import { AddLogComponent } from './add-log/add-log.component';
import { SecNAVComponent } from './sec-nav/sec-nav.component';
import { AdminleaveComponent } from './adminleave/adminleave.component';

const myRoute : Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path:"deleteEmployee",
    component:SearchEmployeeComponent
  },
  {
    path:"addSecurity",
    component:AddSecurityComponent
  },
  {
    path:"viewSecurity",
    component:ViewSecurityComponent
  },
  {
    path:"deleteSecurity",
    component:SearchSecurityComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  },
  {
    path:"applyleave",
    component:ApplyLeaveComponent
  },
  {
    path:"viewleaveemp",
    component:LeaveStatusComponent
  },
  {
    path:"securitylog",
    component:SecurityLogViewComponent
  },
  {
    path:"addlog",
    component:AddLogComponent
  },
  {
    path:"adminleave",
    component:AdminleaveComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    NavbarComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent,
    HomeComponent,
    EmployeeLoginComponent,
    HomeNavComponent,
    SecurityLoginComponent,
    ApplyLeaveComponent,
    EmployeenavComponent,
    LeaveStatusComponent,
    SecurityLogViewComponent,
    AddLogComponent,
    SecNAVComponent,
    AdminleaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

admin = new Admin();  
msg='';

emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private registerService : RegistrationService, private router : Router) { }

  ngOnInit(): void {
  }
  loginAdmin() {  
    this.registerService.loginAdminFromRemote(this.admin).subscribe(
      data => {
        console.log("response recieved")
      this.router.navigate(['/admin-dashboard'])
      } ,
      error => {
        console.log("response recieved")
        this.msg="**Please enter valid email-id and password**";
      } 
    )  
}  
}




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

user = new User();  
msg='';

emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

constructor(private registerService : RegistrationService, private router : Router) { }

ngOnInit(): void {

}
  loginUser() {  
      this.registerService.loginUserFromRemote(this.user).subscribe(
        data => {
          console.log("response recieved")
        this.router.navigate(['/user-dashboard'])
        } ,
        error => {
          console.log("response recieved")
          this.msg="**Please enter valid email-id and password**";
        } 
      )  
  }  
}

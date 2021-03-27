import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  cities=['Bangalore','Hyderabad','Indore','Patna','Kolkata'];
  states=['Bihar','West-bengal','Madhya pradesh','Karnataka','Telangana']
  countries=['Afghanistan','Australia','Bangladesh','Brazil','Canada','Denmark','India','Italy','Mexico','United Kingdom','United States','Yemen','Zimbabwe']
  
  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  validateEmail=true;

  user=new User();
 
  
  msg='';

  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    
    this.service.RegisterUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        alert('You have registered successfully!!!')
        this.router.navigate(['/dashboard'])
        //this.msg="registration successful";
      },
         
        error =>{
        console.log("exception occured");
        this.msg="**User with this email is already exist**";
      }
    )
  }

}

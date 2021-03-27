import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // url='http://localhost:8088/web'  

  url='http://localhost:7088/web'  


  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post(this.url.concat('/login'),user);
  }

  public RegisterUserFromRemote(user:User):Observable<any>{
    console.log(user);
    return this.http.put(this.url.concat('/register'),user);
  }
  public loginAdminFromRemote(admin:Admin):Observable<any>{
    console.log(admin);
    return this.http.post(this.url.concat('/adminlogin'),admin);
  }
  
  //public RegisterAddressFromRemote(address:Address):Observable<any>{
   // return this.http.put(this.url.concat('/register'),address);
  //}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { Seat } from './seat';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

url='http://localhost:8088/web'  


constructor(private http:HttpClient) {​​​​​ }​​​​​

getAllBookings():Observable<any> {
  return(this.http.get(this.url.concat("/seats")));

}


getAllSeats():Observable<any> {
  return(this.http.get(this.url.concat("/seats/available")));

}

getSeatById(id:number) : Observable<any>{
  return this.http.get(this.url.concat("/status/")+id+'');
}

updateSeat(status:Seat):Observable<any> {
  alert('in angular service'+status);
  return this.http.post(this.url.concat("/status"),status);
 
}


getAllUsers():Observable<any> {
  return(this.http.get(this.url.concat("/users")));

}

getUserById(id:number):Observable<any>  {
  return(this.http.get(this.url.concat("/users")+id+''));
}


denyUser(userId:number):Observable<any> {
  let appendUrl=this.url.concat("/users/afterDelete/")+userId+'';
  return this.http.get(appendUrl);
} 

addBooking(booking:Booking,seatId:string):Observable<any>{​​​​​
  //alert('in dataservice'+seatId+booking.bookingId+booking.date)
return this.http.post(this.url.concat('/add/booking/')+seatId,booking);
}​​​​​
 

/*getAll():Observable<any>
  {
   return this.http.get(this.url.concat("/book"));
    
  
    }

  getById(id:number):Observable<any>
  {
   return this.http.get(this.url.concat("/book/")+id+"");
  }*/
 
  /*delete(id:number):Observable<any>
  {
    return this.http.get(this.url.concat("/book/Delete/")+id+"");
    
  }
  Update(user:User):Observable<any>
  {
   
   /* let append=this.url.concat("/test");
    return this.http.post(append,test);
    return this.http.put(this.url.concat("/book"),user);
  }*/
  
}



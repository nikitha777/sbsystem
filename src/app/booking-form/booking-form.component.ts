import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';
import { DataService } from '../data.service';
import { Seat } from '../seat';
import { User } from '../user';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  //seatId:string;
  editSeat:Seat = new Seat();
  statusId:number;
  bookings:Seat[];
  user=new User();
  newBooking:Booking = new Booking();
  addedBooking:Booking=new Booking();
  isAdd = false;
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  phonePattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
     
      this.newBooking.seatId=params['seatId']}); 
    this.route.params.subscribe(params=>this.statusId=params['id']);  
    this.dataService.getSeatById(this.statusId).subscribe(status=>this.editSeat=status);
    //  this.dataService.getUserById(this.userId).subscribe()
  }



  
  addbooking(){

   
    let bookingReturned = this.dataService.addBooking(this.newBooking,this.newBooking.seatId).subscribe(booking=>this.addedBooking=booking);
    if(bookingReturned != null)
    alert("Booking is successful!!!")
    this.isAdd=true;
  
  }
}

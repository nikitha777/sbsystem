import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Seat } from '../seat';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  updated :boolean=false;

  editSeat:Seat = new Seat();
  statusId:number;
  bookings:Seat[];
  isAvailable:Seat[];
  toggle:boolean;
  initialSeats:Seat[];
  
  

  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) {
  
   }


  bookSeat(clickedseat){
    

this.initialSeats.forEach((seat)=>{
 
  if (seat.seatId==clickedseat.seatId) 
    
    seat.isAvailable=false;
  
 
  this.updated=true;
  this.updateSeat(seat);
  } )

alert("status changed");
}


clickSeat(seatId){
  alert(seatId)
  this.router.navigate(['/booking-form',seatId])
}

  ngOnInit(): void {
    this.dataService.getAllBookings().subscribe(bookings=>this.bookings=bookings);
    this.dataService.getAllSeats().subscribe(seats=>this.initialSeats=seats);

    this.route.params.subscribe(params=>this.statusId=params['id']);  
        this.dataService.getSeatById(this.statusId).subscribe(status=>this.editSeat=status);
    
  }

  updateSeat(seat){
    this.dataService.updateSeat(seat).subscribe(isAvailable=>this.editSeat.isAvailable=isAvailable);
  }

}
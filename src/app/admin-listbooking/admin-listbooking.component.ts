import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { DataService } from '../data.service';
import { Seat } from '../seat';
import { User } from '../user';

@Component({
  selector: 'app-admin-listbooking',
  templateUrl: './admin-listbooking.component.html',
  styleUrls: ['./admin-listbooking.component.css']
})
export class AdminListbookingComponent implements OnInit {
  
  seats:Seat[];
  users:User[];
  userId:number;
 
  
  constructor(private dataservice:DataService) { 
    
  }

  ngOnInit(): void {
    this.dataservice.getAllUsers().subscribe(users=>this.users=users);
    
  }
 denyUser(userId:number) {
    alert('press ok to delete');
    this.dataservice.denyUser(userId).subscribe(users=>this.users=users);

  }

}

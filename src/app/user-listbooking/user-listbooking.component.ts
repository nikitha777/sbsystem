import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-user-listbooking',
  templateUrl: './user-listbooking.component.html',
  styleUrls: ['./user-listbooking.component.css']
})
export class UserListbookingComponent implements OnInit {
  users:User[];
  constructor(private dataService:DataService) {

   }
  

  ngOnInit(): void {

    
    this.dataService.getAllUsers().subscribe(users=>this.users=users);
  }

}

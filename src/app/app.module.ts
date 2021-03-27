import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService } from './service/registration.service';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminListbookingComponent } from './admin-listbooking/admin-listbooking.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListbookingComponent } from './user-listbooking/user-listbooking.component';




@NgModule({
  declarations: [
    AppComponent,
    SeatBookingComponent,
    DashboardComponent,
    UserloginComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminListbookingComponent,
    BookingFormComponent,
    UserDashboardComponent,
    AboutComponent,
    ContactComponent,
    AdminDashboardComponent,
    UserListbookingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, NgbModule
  ],
  providers: [DataService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

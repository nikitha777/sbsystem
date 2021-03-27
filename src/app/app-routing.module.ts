import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminListbookingComponent } from './admin-listbooking/admin-listbooking.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListbookingComponent } from './user-listbooking/user-listbooking.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:"",redirectTo:'/dashboard','pathMatch':'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"seat-booking",component:SeatBookingComponent},
  {path:"booking-form/:seatId",component:BookingFormComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"admin-listbooking",component:AdminListbookingComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"user-listbooking",component:UserListbookingComponent},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

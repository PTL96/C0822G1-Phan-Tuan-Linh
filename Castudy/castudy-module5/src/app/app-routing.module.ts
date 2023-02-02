import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./PROTOTYPE/home/home.component";
import {FacilityListComponent} from "./Facility/facility-list/facility-list.component";
import {CustomerListComponent} from "./Customer/customer-list/customer-list.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'customer/list', component:CustomerListComponent},
  {path:'facility/list',component:FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./PROTOTYPE/home/home.component";
import {FacilityListComponent} from "./Facility/facility-list/facility-list.component";
import {CustomerListComponent} from "./Customer/customer-list/customer-list.component";
import {ContractListComponent} from "./Contract/contract-list/contract-list.component";
import {CustomerCreateComponent} from "./Customer/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./Customer/customer-update/customer-update.component";
import {ContractCreateComponent} from "./Contract/contract-create/contract-create.component";
import {FacilityCreateComponent} from "./Facility/facility-create/facility-create.component";
import {ContractUpdateComponent} from "./Contract/contract-update/contract-update.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'customer/list', component:CustomerListComponent},
  {path:'customer/create', component:CustomerCreateComponent},
  {path:'customer/update/:id',component:CustomerUpdateComponent},
  {path:'facility/list',component:FacilityListComponent},
  {path:'facility/create',component:FacilityCreateComponent},
  {path:'contract/list', component:ContractListComponent},
  {path:'contract/create', component:ContractCreateComponent},
  {path:'contract/update/:id', component:ContractUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

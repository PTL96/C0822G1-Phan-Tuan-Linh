import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PROTOTYPE/home/home.component';
import { HeaderComponent } from './PROTOTYPE/header/header.component';
import { FooterComponent } from './PROTOTYPE/footer/footer.component';
import { FacilityListComponent } from './Facility/facility-list/facility-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FacilityCreateComponent } from './Facility/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './Facility/facility-update/facility-update.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './Customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './Customer/customer-update/customer-update.component';
import {HttpClientModule} from "@angular/common/http";
import { ContractListComponent } from './Contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './Contract/contract-create/contract-create.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ContractUpdateComponent } from './Contract/contract-update/contract-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

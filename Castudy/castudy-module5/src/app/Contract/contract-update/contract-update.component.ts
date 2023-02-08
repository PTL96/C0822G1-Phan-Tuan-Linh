import {Component, OnInit} from '@angular/core';
import {ContractService} from "../service/contract.service";
import {FacilityService} from "../../Facility/service/facility.service";
import {CustomerService} from "../../Customer/service/customer.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Contract} from "../model/contract";
import {Customer} from "../../Customer/model/customer";
import {Facility} from "../../Facility/model/facility";

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  updateForm: FormGroup | undefined;
  contract: Contract | null | undefined;
  customer: Customer [] = [];
  facility: Facility [] = [];

  constructor(private contractService: ContractService,
              private facilityService: FacilityService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(dt => {
      const id = dt.get("id");
      if (id != null) {
        this.contractService.findById(parseInt(id)).subscribe(data => {
          this.contract = data;
          this.updateForm = new FormGroup({
            id: new FormControl(this.contract?.id),
            customer: new FormControl(this.contract?.customer),
            facility: new FormControl(this.contract?.facility),
            starDay: new FormControl(this.contract?.starDay),
            endDay: new FormControl(this.contract?.endDay),
            deposit: new FormControl(this.contract?.deposit),
          });
          console.log(this.updateForm.value);
          this.customerService.getAll().subscribe(ctm => {
            this.customer = ctm;
          });
          this.facilityService.getAll().subscribe(fct=>{
            this.facility = fct;
          })
        })
      }
    })
  }

  ngOnInit(): void {
  }

}

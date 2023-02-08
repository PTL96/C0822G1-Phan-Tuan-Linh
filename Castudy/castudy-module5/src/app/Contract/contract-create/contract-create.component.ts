import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../Customer/service/customer.service";
import {FacilityService} from "../../Facility/service/facility.service";
import {ContractService} from "../service/contract.service";
import {Router} from "@angular/router";
import {Facility} from "../../Facility/model/facility";
import {Customer} from "../../Customer/model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  facility: Facility[] = [];
  customer: Customer[] = [];
  formCreate: FormGroup = new FormGroup({
    id: new FormControl(),
    customer: new FormControl('',Validators.required),
    facility: new FormControl('',[Validators.required]),
    starDay: new FormControl('',[Validators.required]),
    endDay: new FormControl('',[Validators.required]),
    deposit: new FormControl('',[Validators.required, Validators.min(0), Validators.max(100000000)])
  });


  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router) {
    this.customerService.getAll().subscribe(data => {
      this.customer = data;
      console.log(this.customer)
    });
    this.facilityService.getAll().subscribe(data => {
      this.facility = data;
    })
  }

  ngOnInit(): void {
  }

  create() {
    const contract = this.formCreate.value
    if (this.formCreate.valid) {
      this.contractService.save(contract).subscribe(() => {
        this.router.navigateByUrl("/contract/list")
        alert("Created")
      })
    } else {
      alert("Please check the information again");
    }

  }
}

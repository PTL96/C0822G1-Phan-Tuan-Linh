import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../model/facility-type";
import {RentType} from "../model/rent-type";
import {FacilityService} from "../service/facility.service";
import {FacilityTypeService} from "../service/facility-type.service";
import {RentTypeService} from "../service/rent-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityType: FacilityType[] = [];
  rentType: RentType [] = [];

  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    area: new FormControl('',[Validators.min(10),Validators.max(1000)]),
    cost: new FormControl('',[Validators.min(0),Validators.max(100000000)]),
    facilityFree: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    maxPeople: new FormControl('',[Validators.required,Validators.min(1),Validators.max(20)]),
    numberFloors: new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
    otherConvenience: new FormControl('',[Validators.required]),
    pollArea: new FormControl('',[Validators.min(0),Validators.max(10000)]),
    standardRoom: new FormControl(),
    facilityType: new FormControl(),
    rentType: new FormControl()
  });

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private router: Router) {
    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data;
    });
    this.rentTypeService.getAll().subscribe(rent => {
      this.rentType = rent;
    })
  }

  ngOnInit(): void {
  }

  createFacility() {
    const facility = this.createForm.value;
    // if (this.createForm.valid){
      this.facilityService.save(facility).subscribe(() => {
        alert("Created")
        this.router.navigateByUrl("/facility/list");
      });
    // }else {
    //   alert("Please check the information again")
    // }

  }
}

import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../service/facility.service";
import {Router} from "@angular/router";
import {Facility} from "../model/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facility: Facility[] = [];

  constructor(private facilityService: FacilityService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.getAllFacility()
  }

  getAllFacility() {
    this.facilityService.getAll().subscribe(data => {
      this.facility = data;
    })
  }
}

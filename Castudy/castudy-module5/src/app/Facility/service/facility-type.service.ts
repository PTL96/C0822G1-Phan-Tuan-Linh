import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacilityType} from "../model/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient: HttpClient) { }

  FCTT=("http://localhost:8080/facilityType")

  getAll(): Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(this.FCTT);
  }
}

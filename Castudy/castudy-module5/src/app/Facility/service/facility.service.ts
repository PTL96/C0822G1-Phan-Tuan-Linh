import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) { }
  FT_URL = ("http://localhost:3000/facility")

  getAll(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.FT_URL);
  }

}

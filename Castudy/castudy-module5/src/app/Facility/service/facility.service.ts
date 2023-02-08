import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";
import {Customer} from "../../Customer/model/customer";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient: HttpClient) { }
  // FT_URL = ("http://localhost:3000/facility")
  FT_URL = ("http://localhost:8080/facility")

  getAll(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.FT_URL);
  }
  delete(id: number | undefined): Observable<Facility[]> {
    return this.httpClient.delete<Facility[]>(this.FT_URL + '/' + id);
  }

  // detail(id: number | undefined): Observable<Facility[]> {
  //   return this.httpClient.get<Facility[]>(this.FT_URL + '/detail/' + id);
  // }
}

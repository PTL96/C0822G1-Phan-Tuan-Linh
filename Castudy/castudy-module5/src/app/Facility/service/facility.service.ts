import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";

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

  save(facility: Facility): Observable<Facility>{
    return this.httpClient.post<Facility>(this.FT_URL, facility)
  }

  findById(id: number) {
    return this.httpClient.get(this.FT_URL + '/' + id)
  }

  delete(id: number | undefined): Observable<Facility[]> {
    debugger
    return this.httpClient.delete<Facility[]>(this.FT_URL + '/' + id);
  }



}

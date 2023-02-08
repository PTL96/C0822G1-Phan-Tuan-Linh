import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RentType} from "../model/rent-type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) { }
  RT=("http://localhost:8080/rentType")

  getAll(): Observable<RentType[]>{
    return this.httpClient.get<RentType[]>(this.RT)
  }
}

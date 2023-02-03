import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) { }
CTMT_URL = ("http://localhost:3000/customerType")

  getAll(): Observable<CustomerType[]>{
   return  this.httpClient.get<CustomerType[]>(this.CTMT_URL);
  }
}

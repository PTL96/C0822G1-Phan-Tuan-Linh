import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient) { }

  CTM_URL = ("http://localhost:3000/customer")

  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.CTM_URL);
  }
}

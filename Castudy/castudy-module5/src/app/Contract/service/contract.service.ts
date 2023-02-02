import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) { }

  CT_URL = ("http://localhost:3000/contract")

  getAll(): Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(this.CT_URL);
  }
}

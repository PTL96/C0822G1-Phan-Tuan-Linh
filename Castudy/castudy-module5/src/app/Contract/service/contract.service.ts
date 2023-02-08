import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) {
  }

  CT_URL = ("http://localhost:8080/contract")

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.CT_URL);
  }

  save(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.CT_URL, contract);
  }

  findById(id: number) {
    return this.httpClient.get(this.CT_URL + '/' + id)
  }

  update(contract: Contract) {
    return this.httpClient.patch(this.CT_URL + '/update/' + contract.id, contract)
  }
}

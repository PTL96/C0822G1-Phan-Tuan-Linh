import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  CTM_URL = ("http://localhost:8080/customer")

  // CTM_URL = ("http://localhost:3000/customer")

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.CTM_URL);
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.CTM_URL, customer);
  }

  findById(id: number) {

    return this.httpClient.get(this.CTM_URL + '/' + id)
  }

  update(customer: Customer) {
    return this.httpClient.patch(this.CTM_URL + '/update/' + customer.id, customer);
  }


  delete(id: number | undefined): Observable<Customer[]> {
    return this.httpClient.delete<Customer[]>(this.CTM_URL + '/' + id);
  }

  search(name: string, customerType: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.CTM_URL + "?name_like=" + name + "&customerType.name_like=" + customerType)
  }
}

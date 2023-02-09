import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  PRD_URL = ("http://localhost:3000/product")

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRD_URL);
  }

  findById(id: number) {
    return this.httpClient.get(this.PRD_URL + '/' + id)
  }

  update(product: Product){
    return this.httpClient.patch(this.PRD_URL + '/' + product.id, product)
  }

  delete(id: number | undefined): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(this.PRD_URL + '/' + id)
  }


  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.PRD_URL, product)
  }
}

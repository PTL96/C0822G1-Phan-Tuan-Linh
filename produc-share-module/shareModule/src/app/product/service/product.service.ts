import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  PRD = ("http://localhost:3000/product")

  getALl(): Observable<Product[]>{
   return this.httpClient.get<Product[]>(this.PRD)
  }

  findById(id : number){
    return this.httpClient.get(this.PRD+'/'+id)
  }

  save(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.PRD, product)
  }

  delete(id: number| undefined): Observable<Product[]>{
   return this.httpClient.delete<Product[]>(this.PRD+'/'+id)
  }

  update(product: Product){
    return this.httpClient.patch(this.PRD + '/' + product.id, product)
  }
}

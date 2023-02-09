import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  URL_CT = ("http://localhost:3000/category")

    getAll(): Observable<Category[]>{
   return this.httpClient.get<Category[]>(this.URL_CT);
    }
}

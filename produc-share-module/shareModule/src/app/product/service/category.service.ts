import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  CT = ("http://localhost:3000/category")

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.CT)
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medical} from "../model/medical";

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private httpClient: HttpClient) {
  }

  MD_URL = ("http://localhost:8080/medical")

  getAll(): Observable<Medical[]> {
    return this.httpClient.get<Medical[]>(this.MD_URL)
  }
  getAllPage(page: number): Observable<any>  {
    return this.httpClient.get<any>(this.MD_URL+'/'+'?page=' + page);
  }

  delete(id: number | undefined): Observable<Medical[]> {
    return this.httpClient.delete<Medical[]>(this.MD_URL + '/' + id)
  }

  save(medical: Medical): Observable<Medical> {
    return this.httpClient.post<Medical>(this.MD_URL, medical)
  }

  findById(id: number) {
    return this.httpClient.get(this.MD_URL + '/' + id)
  }

  update(medical: Medical): Observable<Medical> {
    return this.httpClient.patch<Medical>(this.MD_URL + '/update' + medical.id, medical)
  }
}

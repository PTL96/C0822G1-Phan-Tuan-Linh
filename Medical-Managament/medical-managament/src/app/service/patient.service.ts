import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }
  PT_URL = ("http://localhost:8080/patient")

  getAll(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(this.PT_URL)
  }
}

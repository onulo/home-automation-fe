import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Measurement } from './measurement';
import {Observable} from "rxjs/internal/Observable";


@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  measurementUrl = "http://127.0.0.1:9999/measurements";

  constructor(private http: HttpClient) { }

  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.measurementUrl);
  }

}

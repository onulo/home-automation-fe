import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Measurement } from './measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  measurementUrl = "http://192.168.0.20:9999/v2/measurements"

  constructor(private http: HttpClient) { }

  getMeasurements() {
    return this.http.get<Measurement[]>(this.measurementUrl);
  }

}

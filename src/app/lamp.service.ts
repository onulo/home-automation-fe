import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LampStatus } from './LampStatus';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class LampService {

  lampStatusUrl = 'http://192.168.0.20:9999/v2';
  toggleLampUrl = 'http://192.168.0.20:9999/v2/toggle';
  toggleNightModeUrl = 'http://192.168.0.20:9999/v2/nightMode';

  constructor(private http: HttpClient) { }
  
  getLampStatus(): Observable<LampStatus> {
    return this.http.get<LampStatus>(this.lampStatusUrl);
  }

  toggleLamp() : Observable<boolean> {
    return this.http.get<boolean>(this.toggleLampUrl);
  }

  toggleNightMode() : Observable<boolean>{
    return this.http.get<boolean>(this.toggleNightModeUrl);
  }


}

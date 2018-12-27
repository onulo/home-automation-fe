import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LampStatus } from './LampStatus';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class LampService {

  private lampStatusUrl = 'http://127.0.0.1:9999/lamp/status';
  
  private lampOnUrl = 'http://127.0.0.1:9999/lamp/on';
  private lampOffUrl = 'http://127.0.0.1:9999/lamp/off';

  private nightModeOnUrl = 'http://127.0.0.1:9999/lamp/nightModeOn';
  private nightModeOffUrl = 'http://127.0.0.1:9999/lamp/nightModeOff';

  constructor(private http: HttpClient) { }
  
  getLampStatus(): Observable<LampStatus> {
    return this.http.get<LampStatus>(this.lampStatusUrl);
  }

  lampOn() : Observable<boolean> {
    return this.http.get<boolean>(this.lampOnUrl);
  }

  lampOff() : Observable<boolean> {
    return this.http.get<boolean>(this.lampOffUrl);
  }

  nightModeOn() : Observable<boolean>{
    return this.http.get<boolean>(this.nightModeOnUrl);
  }

  nightModeOff() : Observable<boolean>{
    return this.http.get<boolean>(this.nightModeOffUrl);
  }

}

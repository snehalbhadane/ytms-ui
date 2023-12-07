import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseURLT="http://localhost:8080/location";

  constructor(private httpClient:HttpClient) { }

  getLocationList():Observable<any>{
    console.log(this.baseURLT+"/getLocations");
    return this.httpClient.get<any>(this.baseURLT+"/getLocations")
  }
}

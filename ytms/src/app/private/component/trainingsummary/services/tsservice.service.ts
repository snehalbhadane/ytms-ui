import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TSserviceService {

  baseURL = "http://localhost:8080/tsm"

  constructor(private _http:HttpClient) { }

  //create Training Summary
  // public createTS(trainingSummary:any){
  //   return this._http.post.(this.baseURL + "/addSummary",trainingSummary);
  // }

  //get all Training Summary 
  public getAllTrainingSummay(){
    return this._http.get(this.baseURL+"/getTrainigSummaryDetails/");
  }

  //delete Training Summary
  public deleteTrainingSummary(trainingSummaryId:any){
    return this._http.delete(this.baseURL + "/deleteTrSummary/",trainingSummaryId);
  }
}

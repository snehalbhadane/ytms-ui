import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TSserviceService {

  baseURL = "http://localhost:8080/tsm"

  private url = "http://localhost:8080/tsm/getByTsmId/"

  constructor(private _http: HttpClient) { }

  //create Training Summary
  public createTrainingSummary(trainingSummary: any): Observable<any> {
    return this._http.post(this.baseURL + "/addSummary", trainingSummary);
  }

  //get all Training Summary 
  public getAllTrainingSummay(): Observable<any> {
    return this._http.get(this.baseURL + "/getTrainigSummaryDetails/");
  }

  //delete Training Summary
  public deleteTrainingSummary(trainingSummaryId: any): Observable<any> {
    return this._http.delete(this.baseURL + "/deleteTrSummary/" + trainingSummaryId);
  }

  //get Training Summary Details By Id
  public getTrainingDetailsById(trainingSummaryId: number): Observable<any> {
    
    return this._http.get(this.baseURL + "/getByTsmId/" + `${trainingSummaryId}`);

  }

  //update Training summary By Id
  public updateTrainingSummary(trainingSummary:any, trainingSummaryId:any){
    return this._http.put(this.baseURL +"/updateTrainingSummary/" +`${trainingSummaryId}`,trainingSummary);
  }

  //Search By Trainer Name
  public searchByName(trainerName:any){
    return this._http.get(this.baseURL + "/getSummaryByName/" +`${trainerName}`);
  }
}

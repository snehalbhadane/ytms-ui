import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingPlanService {

  private baseUrl="http://localhost:8080/trainingPlan";

  constructor(private httpClient:HttpClient) { }

  addTrainingPlan(data:any):Observable<Object>{

    return this.httpClient.post((this.baseUrl+'/saveTrainingplan'),data);

  }
  getTrainingPlan():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+'/allTrainingPlan')
  }

  updateTrainingPlanById(trainingPlanId:number,data:any): Observable<Object> {

    console.log("inside update service method")
    console.log(data);
    
    return this.httpClient.put(`${this.baseUrl+'/updateTrainingPlan'}/${trainingPlanId}`,data);
  }
  
  deleteTrainingPlan(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl+'/deletePlan/'}`+id);
  }

  getbyTrainingplanId(trainingPlanId:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl+'/GetTrainingPlanById/'}`+trainingPlanId);

  }
}

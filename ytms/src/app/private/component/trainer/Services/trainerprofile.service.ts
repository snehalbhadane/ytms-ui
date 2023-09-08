import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../Entity/trainer';


@Injectable({
  providedIn: 'root'
})
export class TrainerprofileService {

  private baseURLT="http://localhost:8080/trainer";
  //private baseURLTS="http://localhost:8080/trainer/saveTrainerDetails";

  constructor(private httpClient:HttpClient) { }

    getTrainersList():Observable<any>{
       return this.httpClient.get<any>(this.baseURLT+'/getTrainers')
     }

    // public getTrainersList(){
    //   return this.httpClient.get(this.baseURLT+"/getTrainers/");
    // }

getTrainerById(id: number):Observable<any>{

return this.httpClient.get(`${this.baseURLT+'/getTrainer'}/${id}`);
}

addTrainer(data:any):Observable<Object>{

  console.log("inside save service method")
  console.log(data)

  return this.httpClient.post((this.baseURLT+'/saveTrainerDetails/'),data);
  //return this.httpClient.post(this.baseURLT,data);
}

updateTrainer(UpdateTrainer:any): Observable<Object> {

 

  return this.httpClient.put((this.baseURLT+'/updateTrainerDetails'),UpdateTrainer);
}
deleteTrainer(trainerId: number): Observable<any> {
  return this.httpClient.delete(`${this.baseURLT+'/deleteTrainer/'}`+trainerId);
}

updateTrainerId(id:number,data:any): Observable<Object> {

  console.log("inside update service method")
  console.log(data);
  
  return this.httpClient.put(`${this.baseURLT+'/updateTrainerDetail'}/${id}`,data);
}

}


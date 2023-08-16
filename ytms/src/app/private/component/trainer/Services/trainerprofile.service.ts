import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../Entity/trainer';


@Injectable({
  providedIn: 'root'
})
export class TrainerprofileService {

  private baseURLT="http://localhost:8080/trainer";

  constructor(private httpClient:HttpClient) { }

    getTrainersList():Observable<Trainer[]>{
      return this.httpClient.get<Trainer[]>(this.baseURLT+'/getTrainers')
    }

getTrainerById(trainerId: number):Observable<any>{

return this.httpClient.get(`${this.baseURLT+'/getTrainer'}/${trainerId}`);
}

addTrainer(trainer:Trainer):Observable<Object>{
  return this.httpClient.post((this.baseURLT+'/saveTrainerDetails'),trainer);
}

updateTrainer(trainer: Trainer): Observable<Object> {

  return this.httpClient.put((this.baseURLT+'/updateTrainerDetails'),trainer);
}
deleteTrainer(trainerId: number): Observable<any> {
  return this.httpClient.delete(`${this.baseURLT+'/deleteTrainer'}/${trainerId}`);
}

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainerTask } from '../Entity/trainer-task';


@Injectable({
  providedIn: 'root'
})
export class TrainersTaskService {

  private baseURLT="http://localhost:8080/trainer";

  constructor(private httpClient1:HttpClient) { }

  getTrainerTasks():Observable<TrainerTask[]>{
      return this.httpClient1.get<TrainerTask[]>(this.baseURLT+'/getTrainerTasks')
    }

getTrainerTaskByTaskId(trainerTaskId: number):Observable<any>{

return this.httpClient1.get(`${this.baseURLT+'/getTrainerTask'}/${trainerTaskId}`);
}

getTrainerTasksByCreatedById(createdById: number):Observable<any>{

  return this.httpClient1.get(`${this.baseURLT+'/getTrainerTasksByCreatedById'}/${createdById}`);
  }

saveTrainerTask(trainertask:TrainerTask):Observable<Object>{
  return this.httpClient1.post((this.baseURLT+'/saveTrainerTask'),trainertask);
}

updateTrainerTask(trainerTask: TrainerTask): Observable<Object> {

  return this.httpClient1.put((this.baseURLT+'/updateTrainerTask'),trainerTask);
}

deleteTrainerTask(trainerTaskId: number): Observable<any> {
  return this.httpClient1.delete(`${this.baseURLT+'/deleteTrainerTask'}/${trainerTaskId}`);
}

}


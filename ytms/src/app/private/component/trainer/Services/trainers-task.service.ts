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

// getTrainerTaskByTaskId(trainerTaskId: number):Observable<any>{

// return this.httpClient1.get(`${this.baseURLT+'/getTrainerTask'}/${trainerTaskId}`);

// }

getTrainerTaskByTaskId(id: number):Observable<any>{

  console.log(id);

  return this.httpClient1.get(`${this.baseURLT+'/getTrainerTask'}/${id}`);
  }

getTrainerTasksByCreatedById(createdById: number):Observable<any>{

  return this.httpClient1.get(`${this.baseURLT+'/getTrainerTasksByCreatedById'}/${createdById}`);
  }

saveTrainerTask(addTrainerTask:any):Observable<Object>{
  console.log("inside save service method")
  console.log(addTrainerTask)
  return this.httpClient1.post((this.baseURLT+'/saveTrainerTask/'),addTrainerTask);

}

updateTrainerTask(trainerTask: TrainerTask): Observable<Object> {

  return this.httpClient1.put((this.baseURLT+'/updateTrainerTask'),trainerTask);
}

deleteTrainerTask(trainerTaskId: number): Observable<any> {
  return this.httpClient1.delete(`${this.baseURLT+'/deleteTrainerTask'}/${trainerTaskId}`);
}

updateTrainerTaskByTaskId(id:number,data:any): Observable<Object> {

  console.log("inside update service method")
  console.log(data);

  return this.httpClient1.put(`${this.baseURLT+'/updateTask'}/${id}`,data);
}

}

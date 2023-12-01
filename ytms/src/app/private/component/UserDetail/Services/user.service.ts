import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURLT="http://localhost:8080/useraccess";

  constructor(private httpClient1:HttpClient) { }

  getUserList():Observable<any>{
    return this.httpClient1.get<any>(this.baseURLT+'/get-all-user-details')
  }

 // public getTrainersList(){
 //   return this.httpClient.get(this.baseURLT+"/getTrainers/");
 // }

getUserById(id: number):Observable<any>{

return this.httpClient1.get(`${this.baseURLT+'/getById'}/${id}`);
}

updateUserById(id:any,data:any): Observable<Object> {

  console.log("inside update service method")
  console.log(data);
  
  return this.httpClient1.put(`${this.baseURLT+'/updateUser'}/${id}`,data);
}

getRole() {
  console.log("Role call");
  return this.httpClient1.get("http://localhost:8080/role"+'/get-all-rolles');

}

}

import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if(this.apiService.getToken()!=null){
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.apiService.getToken()}`)
          });

          return next.handle(authReq);
      } else{
        return next.handle(req);
      }      
  }
}
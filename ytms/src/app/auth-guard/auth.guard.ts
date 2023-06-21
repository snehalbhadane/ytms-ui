import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }
  
  // canActivate(): boolean {
  //   if(this.authService.isAuthenticated()){
  //     return true;
  //   }else {
  //     this.router.navigate(['/public']);
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getLoginUserDetails();
      if (user) {
        // check if route is restricted by role
        if (route.data['roles'] && route.data['roles'].indexOf(user.role.roleName) === -1) {
          // role not authorised so redirect to home page
          this.router.navigate(['/private']);
          return false;
        }
        // authorised so return true
        return true;
      }
      return true;
    } else {
      this.router.navigate(['/public']);
      return false;
    }
  }

}

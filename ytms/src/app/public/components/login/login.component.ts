import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth-guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
  });

  constructor(private router: Router, private apiService: ApiService, private toastrService: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    if (!this.loginForm.valid) {
      return;
    }
    let user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.apiService.login(user).
      subscribe(res => {
        if (res.status == "200") {
          this.toastrService.success('Login Successfully!', 'Success');
          this.authService.storeToken(res.authToken, res.user);
          this.router.navigateByUrl('/private');
        }else {
          if(res.hasOwnProperty('error')){
            this.toastrService.warning(res.error, 'Warning');
          }else {
            this.toastrService.warning(res.message, 'Warning');
          }
        }
      },
        err => {
          this.toastrService.error('An error has occured, Please try again!', 'Error');
          this.authService.removeToken();
        });
  }
}

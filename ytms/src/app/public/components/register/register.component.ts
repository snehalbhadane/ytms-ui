import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custom-validator';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  designationList: any = [
    {
      name: "Sr. Software Engg",
      value: "srSoftwareEngg"
    },
    {
      name: "Project Manager",
      value: "projectManager"
    },
    {
      name: "Trainer",
      value: "Trainer"
    },
    {
      name: "Junior Manager",
      value: "junior_Manager"
    },

    {
      name: "Sr Manager",
      value: "Sr_Manager"
    }
  ];
  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
    passwordConfirm: new FormControl(null, [Validators.required]),
    designation: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    project: new FormControl(null),
    experience: new FormControl(null, [Validators.required]),
    empId: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern("^[0-9_-]{10,12}")]),
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  constructor(private apiService: ApiService, private router: Router, private toastrService: ToastrService) { }
  message:boolean=false;

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm.value);
    if (!this.registerForm.valid) {
      return;
    }
    let user = {
      empCode: this.registerForm.value.empId,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      mobile: this.registerForm.value.phoneNumber,
      gender: this.registerForm.value.gender,
      dobDate: this.registerForm.value.birthday,
      experience: this.registerForm.value.experience,
      location: this.registerForm.value.location,
      project: this.registerForm.value.project,
      designation: this.registerForm.value.designation,
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwordConfirm,
    }
    this.apiService.register(user).
      subscribe(res => {
        if (Object.keys(res).length > 0) {
          if(res.hasOwnProperty('error')){
            this.toastrService.warning(res.error, 'Warning');
          }else {
            this.toastrService.success('Register Successfully!', 'Success');
            this.router.navigate(['/public/login']);
          }
          this.message=true;
        } else {

        }
      },
      err => {
        this.toastrService.error('An error has occured, Please try again!', 'Error');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { TrainersTaskService } from './Services/trainers-task.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-guard/auth.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  role_id:any;
  role:any;
  listTrainersTaskComponent:any
data: any;

  userName: string;
  imageLetter: any;


  constructor(private trainertaskeService :TrainersTaskService,private _router: Router,private authService: AuthService) { }

  ngOnInit(): void {

    let user = this.authService.getLoginUserDetails();
    this.userName = user.firstName + " " + user.lastName;
    this.imageLetter = user.firstName.charAt(0).toUpperCase()+user.lastName.charAt(0).toUpperCase()
    this.role = user.role;

   
    
   this.trainertaskeService.getTrainerTasks().subscribe((data)=>{

      console.log(data)
      
      this.listTrainersTaskComponent= data;
  
  
      },(error) => {
        console.log(error);
      });
  }
  
  user = this.authService.getLoginUserDetails();
  role_id1:any=this.user.role.roleId;

}

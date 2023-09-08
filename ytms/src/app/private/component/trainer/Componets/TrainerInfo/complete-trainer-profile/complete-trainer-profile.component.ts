import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../Entity/trainer';
import { TrainerprofileService } from '../../../Services/trainerprofile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complete-trainer-profile',
  templateUrl: './complete-trainer-profile.component.html',
  styleUrls: ['./complete-trainer-profile.component.css']
})
export class CompleteTrainerProfileComponent implements OnInit {
id:any;
  data1: any;
  data: any;
  dataUpdate: any;
  constructor(private trainerprofileService :TrainerprofileService,private _router: Router,private route:ActivatedRoute) { }
  listTrainersComponent:Trainer[];
  listTrainersComponent1:any;

  ngOnInit(): void {

  this.id=this.route.snapshot.params['trainerId'];
   this.getOne(this.id);
  }
  
  getOne(id:any){
    this.trainerprofileService.getTrainerById(id).subscribe((data: any)=>{

      console.log(data);
      this.data=data;

   console.log("new data from data")
      console.log(this.data);
    }
      )
  }
  
 

  }



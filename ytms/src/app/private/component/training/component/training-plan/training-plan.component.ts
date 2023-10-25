import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TrainerprofileService } from '../../../trainer/Services/trainerprofile.service';
import { TrainingPlanService } from '../../services/training-plan.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.component.html',
  styleUrls: ['./training-plan.component.css']
})
export class TrainingPlanComponent implements OnInit {

  constructor(private TrainingPlanService1 :TrainingPlanService,private _router: Router,private toastrService: ToastrService){ }

  // trainingplan=new FormGroup({

  //   trainingName:new FormControl(''),
  //   topic:new FormControl(''),
  //   contentsCoverage:new FormControl(''),
  //   extraTopicCoverage:new FormControl(''),
  //   duration:new FormControl(''),
  //   plannedStartDate:new FormControl(''),
  //   plannedEndDate:new FormControl(''),
  //   actualStartDate:new FormControl(''),
  //   actualEndDate:new FormControl(''),
  //   status:new FormControl(''),
  //   remark:new FormControl(''),
    
  // });

  trainingPlan={
    trainingName: '',
    topic: '',
    contentsCoverage: '',
    extraTopicCoverage: '',
    duration: '',
    plannedStartDate:'',
    plannedEndDate:'',
    actualStartDate:'',
    actualEndDate:'',
    status: '',
    remark: '',
    user: {
      userId: '',
    },
    trainer: {
      trainerId: '',
    },
  }
  ngOnInit(): void {

  }

  saveTrainingPlan(){
    this.TrainingPlanService1.addTrainingPlan(this.trainingPlan).subscribe((data:any)=>{

      this.toastrService.success('Trainer saved!', 'Success');
    },
    (error)=>{
      console.log(error);

    }
    )
  }

  
}

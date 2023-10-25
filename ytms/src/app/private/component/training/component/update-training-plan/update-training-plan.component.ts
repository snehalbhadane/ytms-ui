import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingPlanService } from '../../services/training-plan.service';

@Component({
  selector: 'app-update-training-plan',
  templateUrl: './update-training-plan.component.html',
  styleUrls: ['./update-training-plan.component.css']
})
export class UpdateTrainingPlanComponent implements OnInit {

  constructor(private updateTrainingPlanService1 :TrainingPlanService,private _router: Router,private acturouter:ActivatedRoute) { }

  trainingPlanId:any;
  
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

   this.trainingPlanId= this.acturouter.snapshot.params['trainingPlanId'];
   console.log(this.trainingPlanId);

   this.updateTrainingPlanService1.getbyTrainingplanId(this.trainingPlanId).subscribe((data)=>{
    console.log("training plan data after id"+data)
    this.trainingPlan=data;
   }
   ,(error)=>{

   }
   
   );

  }
  updateTrainingPlan(){

  this.updateTrainingPlanService1.updateTrainingPlanById(this.trainingPlanId,this.trainingPlan).subscribe((data)=>{

    console.log(data,"TrainingPlan data udated")
    })

  }

}

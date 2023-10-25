import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingPlanService } from '../../services/training-plan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-training-plan',
  templateUrl: './list-training-plan.component.html',
  styleUrls: ['./list-training-plan.component.css']
})
export class ListTrainingPlanComponent implements OnInit {


  listTrainingPlanComponent:any;
  

  constructor(private GetTrainingPlanService1 :TrainingPlanService,toastrService: ToastrService,private _router: Router) { }

  ngOnInit(): void {
    
    this.GetTrainingPlanService1.getTrainingPlan().subscribe((data1: any) => {
      this.listTrainingPlanComponent = data1;
      //this.completeprofile=data;

      console.log(data1);
    },
      (error) => {
        console.log(error);
      });

  }

  deleteTrainer(trainingPlanId: any) {
    this.GetTrainingPlanService1.deleteTrainingPlan(trainingPlanId).subscribe((data: any) => {
      console.log("test for delete");
      console.log(data);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      });
  }


}




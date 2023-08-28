import { Component, OnInit } from '@angular/core';
import { TrainersTaskService } from './Services/trainers-task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  listTrainersTaskComponent:any
data: any;

  constructor(private trainertaskeService :TrainersTaskService,private _router: Router) { }

  ngOnInit(): void {
   this.trainertaskeService.getTrainerTasks().subscribe((data)=>{

      console.log(data)
      
      this.listTrainersTaskComponent= data;
  
  
      },(error) => {
        console.log(error);
      });
  }

}

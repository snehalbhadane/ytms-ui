import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainersTaskService } from '../../../Services/trainers-task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  listTrainersTaskComponent:any

  constructor(private trainertaskeService :TrainersTaskService,private _router: Router) { }

  ngOnInit(): void {
    this.trainertaskeService.getTrainerTasks().subscribe((data)=>{

    console.log(data)
    
    this.listTrainersTaskComponent= data;


    },(error) => {
      console.log(error);
    });


  }

  deleteTrainerTask(trainerTaskId: any) {
    this.trainertaskeService.deleteTrainerTask(trainerTaskId).subscribe((data: any) => {
      console.log("test for delete");
      console.log(data);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      });
  }
}

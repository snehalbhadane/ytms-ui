import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TrainerprofileService } from '../../../Services/trainerprofile.service';
import { TrainersTaskService } from '../../../Services/trainers-task.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  message:boolean=false;
    addTrainerTask= new FormGroup({
      trainerTaskId:new FormControl(''),
      taskDate:new FormControl(''),
      firstHalf :new FormControl(''),
      firstHalfDescription:new FormControl(''),
      secondHalf:new FormControl(''),
      secondHalfDescription:new FormControl(''),
      trainer:new FormGroup({
      trainerId:new FormControl('')
  })
  
});
  toastrService: any;

  constructor(private trainertaskService:TrainersTaskService,private _router: Router,private acturouter:ActivatedRoute,toastrService: ToastrService) { }

  ngOnInit(): void {

    this.acturouter.snapshot.params['trainerTaskId']

    this.trainertaskService.getTrainerTaskByTaskId(this.acturouter.snapshot.params['trainerTaskId'])
    .subscribe((data:any)=>{

      console.log(data," dta form task")

    const trainerIdfromdata=data.trainer.trainerId;
     console.log(trainerIdfromdata);

      this.addTrainerTask= new FormGroup({
        trainerTaskId:new FormControl(data['trainerTaskId']),
        taskDate:new FormControl(data['taskDate']),
        firstHalf :new FormControl(data['firstHalf']),
        firstHalfDescription:new FormControl(data['firstHalfDescription']),
        secondHalf:new FormControl(data['secondHalf']),
        secondHalfDescription:new FormControl(data['secondHalfDescription']),
        trainer:new FormGroup({
        trainerId:new FormControl(trainerIdfromdata['trainerId'])
    })
    
  });

    })
  }

  TaskUpdate(){

    console.warn(this.addTrainerTask.value);

   this.trainertaskService.updateTrainerTaskByTaskId(this.acturouter.snapshot.params['trainerTaskId'],this.addTrainerTask.value)
   .subscribe((data)=>{

    this.message=true;

    console.log(data,"data update sucessfuly")

    this.toastrService.success('TrainerTasks saved!', 'Success');
    
    this._router.navigate(['/private/trainer/trainersWithTasklist']);
    
    //window.location.reload();
   })
    
  }

}

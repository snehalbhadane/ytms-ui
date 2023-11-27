import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TrainersTaskService } from '../../../Services/trainers-task.service';
import { Router } from '@angular/router';
import { DatePipe ,formatDate} from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  minStartDate: any;
  minEndDate: any;
  message:boolean=false;

    addTrainerTask= new FormGroup({
      taskDate:new FormControl(''),
      firstHalf :new FormControl(''),
      firstHalfDescription:new FormControl(''),
      secondHalf:new FormControl(''),
      secondHalfDescription:new FormControl(''),
      trainer:new FormGroup({
      trainerId:new FormControl('')
  })
  
});
  constructor(private trainertaskService:TrainersTaskService,private _router: Router,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitTask(){
    console.log(this.addTrainerTask.value);
    
    this.trainertaskService.saveTrainerTask(this.addTrainerTask.value).subscribe((resutlt:any)=>{

      this.toastrService.success('TrainerTasks saved!', 'Success');
      console.log(resutlt);
  
   },(error) => {
         console.log(error);
     }
   )
    
  }

  onStartDateChange(event: any) {
    const datePipe = new DatePipe('en-Us');
    this.minEndDate = datePipe.transform(event.target.value, 'yyyy-MM-dd');
   
   
  }
}
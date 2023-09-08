import { Component, OnInit } from '@angular/core';
import { TrainerprofileService } from '../../../Services/trainerprofile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {

  dataUpdate: any;
  dataforupdateid: any;

UpdateTrainer= new FormGroup({

  
    trainerId :new FormControl(''),
    currentLocation :new FormControl(''),
    baseLocation:new FormControl(''),
    irm:new FormControl(''),
    type:new FormControl(''),
    totalExperience:new FormControl(''),
    user:new FormGroup({
    userId:new FormControl('')

    })
});

  constructor(private trainerprofileService:TrainerprofileService,private _router: Router,private acturouter:ActivatedRoute) { }

  ngOnInit(): void {

    //this.dataforupdateid=this.acturouter.snapshot.params['trainerId'];
    this.acturouter.snapshot.params['trainerId']

    //console.log(this.dataforupdateid);
    
    //this.trainerprofileService.getTrainerById(this.dataforupdateid).subscribe((data: any)=>{
      this.trainerprofileService.getTrainerById(this.acturouter.snapshot.params['trainerId']).subscribe((data: any)=>{

     console.log(data);
     console.log(data.user.userId);
     const userrrqueiredid=data.user.userId;
     console.log(userrrqueiredid);
     
      this.UpdateTrainer= new FormGroup({

        trainerId:new FormControl(data ['trainerId']),
        currentLocation :new FormControl(data ['currentLocation']),
        baseLocation:new FormControl(data ['baseLocation']),
        irm:new FormControl(data ['irm']),
        type:new FormControl(data ['type']),
        totalExperience:new FormControl(data ['totalExperience']),
        
        user:new FormGroup({
        userId:new FormControl(data.user.userId['userId'])
    
        })
    });

  })
 
}
  
 
  collectionsUpdate(){

    console.warn(this.UpdateTrainer.value);
    // this.trainerprofileService.updateTrainer(this.UpdateTrainer.value).subscribe((updateresult)=>{
    //   console.warn(updateresult)
    // })
  
    this.trainerprofileService.updateTrainerId(this.acturouter.snapshot.params['trainerId'],this.UpdateTrainer.value).subscribe((data)=>{
      console.log(data,"data udated")
    })
  }
}

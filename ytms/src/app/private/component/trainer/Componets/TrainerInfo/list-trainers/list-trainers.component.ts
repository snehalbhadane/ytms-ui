import { Component, OnInit } from '@angular/core';
import { TrainerprofileService } from '../../../Services/trainerprofile.service';
import { Router } from '@angular/router';
import { Trainer } from '../../../Entity/trainer';

@Component({
  selector: 'app-list-trainers',
  templateUrl: './list-trainers.component.html',
  styleUrls: ['./list-trainers.component.css']
})
export class ListTrainersComponent implements OnInit {

  listTrainersComponent:Trainer[];
  
  // completeprofile:{

  //   trainerId : number,
  //   currentLocation :String,
  //   baseLocation :String,
  //   irm:String,
  //   type : String,
  //   totalExperience :String,
  //   createdOn : Date,
  //   updatedOn :Date,
  //   user:{
  //     createdOn:any,
  //     email:any,
  //     empCode:any,
  //     firstName:any,
  //     lastName:any,
  //     mobile:any
  //   }
  // }

  constructor(private trainerprofileService :TrainerprofileService,private _router: Router) { }

  ngOnInit(): void {
    
    this.trainerprofileService.getTrainersList().subscribe((data1: any) => {
      this.listTrainersComponent = data1;
      //this.completeprofile=data;

      console.log(data1);
    },
      (error) => {
        console.log(error);
      });

  }

  deleteTrainer(trainerId: any) {
    this.trainerprofileService.deleteTrainer(trainerId).subscribe((data: any) => {
      console.log("test for delete");
      console.log(data);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      });
  }

//  view(trainerId:any){
//  this.trainerprofileService.getTrainerById(trainerId).subscribe((data1:any)=>{
//   console.log("data for specific id")
//   console.log(data1);

//   this._router.navigateByUrl('/private/trainer/view',data1)

// },
// (error) => {
//   console.log(error);
// });
// }
}

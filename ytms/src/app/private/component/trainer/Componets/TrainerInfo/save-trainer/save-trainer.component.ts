import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../Entity/trainer';
import { TrainerprofileService } from '../../../Services/trainerprofile.service';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-save-trainer',
  templateUrl: './save-trainer.component.html',
  styleUrls: ['./save-trainer.component.css']
})
export class SaveTrainerComponent implements OnInit {
  saveTrainerComponent:Trainer=new Trainer();
  
  addTrainer= new FormGroup({

    
    currentLocation :new FormControl(''),
    baseLocation:new FormControl(''),
    irm:new FormControl(''),
    type:new FormControl(''),
    totalExperience:new FormControl(''),
    user:new FormGroup({
    userId:new FormControl('')

    })
});
// profileForm = new FormGroup({
//   firstName: new FormControl(''),
//   lastName: new FormControl(''),
//   address: new FormGroup({
//     street: new FormControl(''),
//     city: new FormControl(''),
//     state: new FormControl(''),
//     zip: new FormControl('')
//   })
// });
  constructor(private trainerprofileService :TrainerprofileService,private _router: Router) { }

  ngOnInit(): void {

    
  }
// saveTrainer(){
  
//   this.trainerprofileService.addTrainer(this.saveTrainerComponent).subscribe((data:any)=>{
//  console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
//   )
  
// }

onSubmit(){
  console.log(this.addTrainer.value);
  this.trainerprofileService.addTrainer(this.addTrainer.value).subscribe((resutlt:any)=>{

    console.log(resutlt);

 },(error) => {
       console.log(error);
   }
 )
  
 
}
}

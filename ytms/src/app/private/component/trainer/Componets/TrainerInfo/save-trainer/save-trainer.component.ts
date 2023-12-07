import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../Entity/trainer';
import { TrainerprofileService } from '../../../Services/trainerprofile.service';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from '../../../Services/location.service';

@Component({
  selector: 'app-save-trainer',
  templateUrl: './save-trainer.component.html',
  styleUrls: ['./save-trainer.component.css']
})
export class SaveTrainerComponent implements OnInit {
  addTrainer!: FormGroup;
  saveTrainerComponent: Trainer = new Trainer();
  locationData:any[]=[];
 

  constructor(private fb: FormBuilder, private trainerprofileService: TrainerprofileService, private _router: Router, private toastrService: ToastrService, private locationService: LocationService) { }

  ngOnInit(): void {
    this.getLocationList();
    this.addTrainer = this.fb.group(
      {
        currentLocation: ['', [Validators.required]],
        baseLocation: ['', [Validators.required]],
        irm: ['', [Validators.required]],
        type: ['', [Validators.required]],
        totalExperience: ['', [Validators.required]],
        user: this.fb.group({
          userId: ['', [Validators.required]]
        })
      }
    )
  }
  onSubmit() {
    if (this.addTrainer.valid) {
      this.trainerprofileService.addTrainer(this.addTrainer.value).subscribe((resutlt: any) => {
        this.toastrService.success('Trainer saved!', 'Success');
        console.log(resutlt);

      }, (error) => {
        console.log(error);
      }
      )
    }
    else {
      this.addTrainer.markAllAsTouched();
    }
  }

  getLocationList() {
    this.locationService.getLocationList().subscribe(data=>{
      this.locationData=data;
    })
  }
}
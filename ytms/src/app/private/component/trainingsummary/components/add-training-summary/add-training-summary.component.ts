import { Component, OnInit } from '@angular/core';
import { TSserviceService } from '../../services/tsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-training-summary',
  templateUrl: './add-training-summary.component.html',
  styleUrls: ['./add-training-summary.component.css']
})
export class AddTrainingSummaryComponent implements OnInit {

  addTS = {
    trainingPattern: '',
    duration: '',
    trainer: {
      userId: '',
    },
    trainingPlan: {
      trainingName: '',
      topic: '',
      contentsCoverage: '',
      extraTopicCoverage: '',
      duration: '',
      status: '',
      remark: '',
      user: {
        userId: '',
      },
      trainer: {
        trainerId: '',
      },
    },
  }
  constructor(private _tsService: TSserviceService, private _router: Router) { }

  ngOnInit() {
    //   this.formBuilder.group({
    //     trainingPattern: ['', Validators.required],
    //     trainingName: ['', Validators.required],
    //     topic: ['', Validators.required],
    //     contentsCoverage: ['', Validators.required],
    //     extraTopicCoverage: ['', Validators.required],
    //     duration: ['', Validators.required],
    //     status: ['', Validators.required],
    //     remark: ['', Validators.required],
    //     user: ['', Validators.required],
    //     trainer: ['', Validators.required],
    //   })
  }
  saveTrainingSummary() {
    this._tsService.createTrainingSummary(this.addTS).subscribe((data: any) => {
      console.log(this.addTS);
      this._router.navigateByUrl('/private/summary');
    })
  }

  onSubmit() {
    this.saveTrainingSummary();
  }
}

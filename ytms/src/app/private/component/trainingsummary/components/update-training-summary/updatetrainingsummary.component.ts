import { Component, OnInit } from '@angular/core';
import { TSserviceService } from '../../services/tsservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetrainingsummary',
  templateUrl: './updatetrainingsummary.component.html',
  styleUrls: ['./updatetrainingsummary.component.css']
})
export class UpdatetrainingsummaryComponent implements OnInit {

  trainingSummaryId: any;
  trainingSummary = {
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

  constructor(private _tsService: TSserviceService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.trainingSummaryId = this._route.snapshot.params['trainingSummaryId'];
    this._tsService.getTrainingDetailsById(this.trainingSummaryId).subscribe((data: any) => {
      console.log(data);
      this.trainingSummary = data;
    },
      (error) => {
        console.log(error);
      });
  }

  updateData() {
    this._tsService.updateTrainingSummary(this.trainingSummary, this.trainingSummaryId).subscribe((data: any) => {
      console.log(data);
      this.trainingSummary = data;
      this.router.navigate(['/private/summary']);
    },
      (error) => {
        console.log(error);
      });
  }
}

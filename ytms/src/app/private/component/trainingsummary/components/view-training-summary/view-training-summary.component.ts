import { Component, OnInit } from '@angular/core';
import { trainingSummary } from '../../trainingsummary.model';
import { TSserviceService } from '../../services/tsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-training-summary',
  templateUrl: './view-training-summary.component.html',
  styleUrls: ['./view-training-summary.component.css']
})
export class ViewTrainingSummaryComponent implements OnInit {

  trainingSummary: trainingSummary[];

  constructor(private _tsService: TSserviceService, private _router: Router) { }

  ngOnInit(): void {
    this._tsService.getAllTrainingSummay().subscribe((data: any) => {
      this.trainingSummary = data;
      console.log(data);
    },
      (error) => {
        console.log(error);
      });
  }


  deleteTrainingSummary(trainingSummaryId: any) {
    this._tsService.deleteTrainingSummary(trainingSummaryId).subscribe((data: any) => {
      console.log(data);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      });
  }

}

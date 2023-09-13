import { Component, OnInit } from '@angular/core';
import { TSserviceService } from '../../services/tsservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-details-training-summary',
  templateUrl: './view-details-training-summary.component.html',
  styleUrls: ['./view-details-training-summary.component.css']
})
export class ViewDetailsTrainingSummaryComponent implements OnInit {
  id: any
  allTrainingSummary: any;
  trainingPlan= 0;
  ids: any;
  constructor(private _tsService: TSserviceService, private _route: ActivatedRoute, private rout1: Router) { }

  ngOnInit(): void {
    this.ids = this._route.snapshot.params['trainingSummaryId'];
    //console.log(this.ids)
    this.getOne(this.ids)
  }

  getOne(id: any) {
    this._tsService.getTrainingDetailsById(this.ids).subscribe((data: any) => {
      console.log(data);
      this.allTrainingSummary = data;
    }
    )
  }

  updateTrainingSummary(trainingSummaryId:any){
    this.rout1.navigate(['private/summary/update/',trainingSummaryId]);
  }
}

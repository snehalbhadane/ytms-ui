import { Component, OnInit } from '@angular/core';
import { TSserviceService } from './services/tsservice.service';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-trainingsummary',
  templateUrl: './trainingsummary.component.html',
  styleUrls: ['./trainingsummary.component.css']
})
export class TrainingsummaryComponent implements OnInit {
  searchValue:any;
  trainingSummary = [];
  firstName:any;
  columnDefs: ColDef[] = [
    { headerName: 'TrainingSummary Id', field: "trainingSummaryId", pinned: 'left', width: 120,},
  ]
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

  //delete Training Summary By Id
  deleteTrainingSummary(trainingSummaryId: any) {
    this._tsService.deleteTrainingSummary(trainingSummaryId).subscribe((data: any) => {
      console.log(data);
      window.location.reload();
    },
      (error) => {
        console.log(error);
      });
  }

  createTs() {
    this._router.navigateByUrl('/private/summary/addTS');
  }

}

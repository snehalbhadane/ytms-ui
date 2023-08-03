import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { TrfService } from '../trf/service/trf.service';

@Component({
  selector: 'app-ctr',
  templateUrl: './ctr.component.html',
  styleUrls: ['./ctr.component.css']
})
export class CtrComponent implements OnInit {

  searchValue : any;
  columnDefs: ColDef[] = [
    { headerName: 'Training Title', field: "trainingTitle", pinned: 'left'},
    { headerName: 'Training Status', field: "status"},
    { headerName: 'Trainer Name', field: "trainerName"},
    { headerName: 'Qtr', field: "qtr" },
    { headerName: 'Year', field: "year"},
    { headerName: 'Start Date', field: "startDate"},
    { headerName: 'End Date', field: "endDate" },
    { headerName: 'Training Initiated From', field: "initiatedFrom"}
  ];

  rowData = [{
    trainingTitle : "Java Developer",
    status : "Approved",
    trainerName : "Jaynam",
    qtr : "",
    year : "", 
    startDate : "17-07-2023",
    endDate : "27-07-2023",
    initiatedFrom : "abc"
  }];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  public gridOptions : GridOptions = {
    columnDefs: this.columnDefs,
    rowSelection: 'single',
    onColumnResized: event => console.log('A column was resized'),
    onGridReady: event => console.log('The grid is now ready'),
  }

  constructor(private router: Router, private trfService : TrfService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
      this.trfService.getCTRList()
      .subscribe(
        (data: any) =>{
          this.rowData = [];
          data.forEach((e:any) => {
            this.rowData.push({
              trainingTitle : e.trainingPlan.trainingName,
              status : e.trainingPlan.status,
              trainerName : e.trainingPlan.user.firstName+" "+e.trainingPlan.user.lastName,
              qtr : "",
              year : "", 
              startDate : e.trainingPlan.actualStartDate,
              endDate : e.trainingPlan.actualEndDate,
              initiatedFrom : "abc"
            });
          });
        },
        (err:any) =>{
          alert(err.error);
        }
      );  
  }

  onRowClicked(event : any){
    console.log(event);
    this.router.navigateByUrl('/private/ctr/associates');
  }
}

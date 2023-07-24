import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-ctrassociatedetails',
  templateUrl: './ctrassociatedetails.component.html',
  styleUrls: ['./ctrassociatedetails.component.css']
})
export class CtrassociatedetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { headerName: 'Employee Id', field: "empId", pinned: 'left'},
    { headerName: 'Name', field: "name"},
    { headerName: 'Resource Type', field: "resourceType"},
    { headerName: 'Purpose to attend training', field: "purposeToAttendTraining" },
    { headerName: 'Duration(Days)', field: "duration"},
    { headerName: 'Start Date', field: "startDate"},
    { headerName: 'End Date', field: "endDate" },
    { headerName: 'Skill', field: "skill"},
    { headerName: 'Upgraded Skill Set', field: "upgradedSkillSet"},
    { headerName: 'Pre Assessment Score', field: "preAssessmentScore"},
    { headerName: 'Final Score', field: "finalScore"},
    { headerName: 'Current Allocation', field: "currentAllocation"},
    { headerName: 'Project', field: "project"},
    { headerName: 'Current Location', field: "currentLocation"},
    { headerName: 'Status', field: "status"},
    { headerName: 'Remark', field: "remark"},
  ];

  rowData = [{
    empId : "1016720",
    name : "Dheerendra kag",
    resourceType : "Non-Billable",
    purposeToAttendTraining : "To enhance skills",
    duration : "24", 
    startDate : "17-07-2023",
    endDate : "27-07-2023",
    skill : "Java",
    upgradedSkillSet : "Angular",
    preAssessmentScore : "7",
    finalScore : "8",
    currentAllocation : "JD",
    project : "JD",
    currentLocation : "Indore",
    status : "xyz",
    remark : "nothing"
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

  onGridReady(params: GridReadyEvent) {
    // this.trfService.getTrfList()
    // .subscribe(
    //   (data: any) =>{
    //     this.rowData = data;
    //   },
    //   (err:any) =>{
    //     alert(err.error);
    //   }
    // );  
}

  backToCTRList(){
    this.router.navigateByUrl('private/ctr');
  }
}

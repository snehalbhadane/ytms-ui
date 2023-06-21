import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { TrfService } from '../../service/trf.service';
import { DatePipe, formatDate } from '@angular/common';


@Component({
  selector: 'app-create-trf',
  templateUrl: './create-trf.component.html',
  styleUrls: ['./create-trf.component.css']
})
export class CreateTrfComponent implements OnInit, AfterViewChecked {

  fileValue: any;
  associateList: any[] = [];
  mode: string = "create";
  headerValue: string = "Create Form";
  trfId: number = 0;
  gridApi: any;
  gridColumnApi: any;
  minStartDate: any;
  minEndDate: any;

  columnDefs: ColDef[] = [
    { headerName: 'Emp Id', field: 'empId', pinned: 'left', width: 100 },
    { headerName: 'Emp Name', field: 'empName', pinned: 'left' },
    { headerName: 'Exprience', field: 'exprience', width: 150 },
    { headerName: 'Grade', field: 'grade', width: 100 },
    { headerName: 'Current Skill', field: 'currentSkill' },
    { headerName: 'Current Allocation', field: 'currentAllocation' },
    { headerName: 'Project', field: 'project' },
    { headerName: 'Upgraded Skill Set', field: 'upgradedSkillSet' }
    // {headerName: 'Action', pinned: 'right', width: 120} 
  ];
  rowData = [];

  trfForm = new FormGroup({
    trainingTitle: new FormControl(null, [Validators.required]),
    trainingType: new FormControl(null, [Validators.required]),
    resourceType: new FormControl(null, [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    projectName: new FormControl(null),
    purposeOfTraining: new FormControl(null, [Validators.required]),
    noOfParticipants: new FormControl(null, [Validators.required]),
    initiatedFrom: new FormControl(null, [Validators.required]),
    startDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required])
  })

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowSelection: 'single',
    onRowClicked: event => console.log('A row was clicked'),
    onColumnResized: event => console.log('A column was resized'),
    onGridReady: event => console.log('The grid is now ready'),
  }

  constructor(private router: Router, private route: ActivatedRoute, private toastrService: ToastrService, private trfService: TrfService) { }

  ngAfterViewChecked(): void {
    this.gridOptions.api?.setRowData(this.associateList);
  }

  ngOnInit(): void {
    const datePipe = new DatePipe('en-Us');
    this.minStartDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.queryParams.subscribe(
      params => {
        if (params['json']) {
          let json = JSON.parse(params['json']);
          if (json) {
            this.mode = json.mode;
            if (this.mode === "view") {
              this.headerValue = "View Form";
            } else if (this.mode === "edit") {
              this.headerValue = "Update Form";
            }
            this.trfId = json.data.trfId;
            this.trfForm.setValue({
              trainingTitle: json.data.trainingTitle,
              trainingType: json.data.trainingType,
              resourceType: json.data.resourceType,
              duration: json.data.duration,
              projectName: json.data.projectName,
              purposeOfTraining: json.data.purposeOfTraining,
              noOfParticipants: json.data.noOfParticipants,
              initiatedFrom: json.data.initiatedFrom,
              startDate: json.data.startDate,
              endDate: json.data.endDate
            });
            if (this.mode === 'view') {
              this.trfForm.controls['trainingTitle'].disable();
              this.trfForm.controls['trainingType'].disable();
              this.trfForm.controls['resourceType'].disable();
              this.trfForm.controls['duration'].disable();
              this.trfForm.controls['projectName'].disable();
              this.trfForm.controls['purposeOfTraining'].disable();
              this.trfForm.controls['initiatedFrom'].disable();
              this.trfForm.controls['noOfParticipants'].disable();
              this.trfForm.controls['startDate'].disable();
              this.trfForm.controls['endDate'].disable();
            }
            this.associateList = json.data.associates;
          }
        }
      }
    )
  }

  onStartDateChange(event: any) {
    const datePipe = new DatePipe('en-Us');
    this.minEndDate = datePipe.transform(event.target.value, 'yyyy-MM-dd');
    this.trfForm.controls['endDate'].setValue(null);
  }

  onEndDateChange(event: any) {
    const datePipe = new DatePipe('en-Us');
    let endDate = datePipe.transform(event.target.value, 'yyyy-MM-dd');
    let date = new Date(datePipe.transform(this.trfForm.controls['startDate'].value, 'yyyy-MM-dd') || "");
    date.setDate(date.getDate() +  Number(this.trfForm.controls['duration'].value));
    let startDate = datePipe.transform(date, 'yyyy-MM-dd');
    if (formatDate(endDate || "", 'yyyy-MM-dd', 'en_US') >= formatDate(startDate || "", 'yyyy-MM-dd', 'en_US')) {
      console.log('---endDate is greater----');
    }
    else {
      this.trfForm.controls['endDate'].setValue(null);
      this.toastrService.warning('Minimum duration should be '+this.trfForm.controls['duration'].value+' days', 'Warning', {
        timeOut: 3000,
      });
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onFileChanged(evt: any) {
    let files = evt.target.files; // FileList object  
    this.parseExcel(files[0]);
    this.fileValue = undefined;
  }

  parseExcel(file: File) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let data = (<any>e.target).result;
      let workbook = XLSX.read(data, {
        type: 'binary'
      });
      let jsonObj: any;
      workbook.SheetNames.forEach((function (sheetName: any) {
        // Here is your object  

        let XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        let json_object = JSON.stringify(XL_row_object);

        // bind the parse excel file data to Grid  
        jsonObj = JSON.parse(json_object);

      }).bind(this), this);
      this.associateList = jsonObj;
      this.gridOptions.api?.setRowData(jsonObj);

    };
    reader.onerror = function (ex) {
      console.log(ex);
    };
    reader.readAsBinaryString(file);
  };

  exportToExcel(element: any): void {
    // generate workbook and add the worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    // save to file
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    XLSX.writeFile(workbook, 'associates-' + new Date().getTime() + '.xlsx');
  }

  downloadAssociate() {
    let rowData: any[] = [];
    this.gridApi.forEachNode((node: { data: any; }) => rowData.push(node.data));
    this.exportToExcel(rowData);
  }


  cancel() {
    this.router.navigateByUrl('/private/trf');
  }

  submit() {
    console.log(this.trfForm.value);
    if (!this.trfForm.valid) {
      return;
    }
    if (this.associateList.length == 0) {
      this.toastrService.warning('Please upload associates!', 'Warning', {
        timeOut: 3000,
      });
      return;
    }
    if (this.mode === "edit") {
      this.updateTrf();
    } else {
      this.createTrf();
    }
  }

  createTrf() {
    this.trfService.submit(this.trfForm, this.associateList).subscribe(res => {
      if (res) {
        this.toastrService.success('Request Created Successfully!', 'Success');
        this.router.navigateByUrl('/private/trf');
      } else {

      }
    },
      err => {
        this.toastrService.error('An error has occured, Please try again!', 'Error', {
          timeOut: 3000,
        });
      });
  }

  updateTrf() {
    this.trfService.updateByTrfId(this.trfId, this.trfForm, this.associateList,).subscribe(res => {
      if (res) {
        this.toastrService.success('Request Updated Successfully!', 'Success');
        this.router.navigateByUrl('/private/trf');
      } else {

      }
    },
      err => {
        this.toastrService.error('An error has occured, Please try again!', 'Error', {
          timeOut: 3000,
        });
      });
  }
}

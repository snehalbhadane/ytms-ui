import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TrfService } from '../../service/trf.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-guard/auth.service';

@Component({
  selector: 'app-trf-action',
  templateUrl: './trf-action.component.html',
  styleUrls: ['./trf-action.component.css']
})
export class TrfActionComponent implements OnInit {

  user!:any;
  params: any;
  isEditShow: boolean = false;
 
 constructor(private router: Router, private trfService: TrfService, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  agInit(params: any): void {
      this.params = params;
      this.user = this.authService.getLoginUserDetails();
      if(this.params.data?.createdBy === this.user?.email && params.data?.status === 'PENDING'){
        this.isEditShow = true;
      }
  }

  viewTrf(){
    this.trfService.getByTrfId(this.params.data.trfId)
    .subscribe(
      (data: any) =>{
        let obj = {
          mode : "view",
          data : data
        }
        this.router.navigate(['/private/trf/create'], { queryParams: { json : JSON.stringify(obj) }});
      },
      (err:any) =>{
        alert(err.error);
      }
    );  
    
  }

  editTrf(){
    this.trfService.getByTrfId(this.params.data.trfId)
    .subscribe(
      (data: any) =>{
        let obj = {
          mode : "edit",
          data : data
        }
        this.router.navigate(['/private/trf/create'], { queryParams: { json : JSON.stringify(obj) }});
      },
      (err:any) =>{
        alert(err.error);
      }
    ); 
  }
}

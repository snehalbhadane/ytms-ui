import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TrfService } from '../../service/trf.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-guard/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trf-action',
  templateUrl: './trf-action.component.html',
  styleUrls: ['./trf-action.component.css']
})
export class TrfActionComponent implements OnInit {

  user!:any;
  params: any;
  isEditShow: boolean = false;
  url! : string;
 constructor(private router: Router, private trfService: TrfService, private authService: AuthService,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  agInit(params: any): void {
      let index = this.router.url.lastIndexOf("/") + 1;
      this.url = this.router.url.substring(index);
      this.params = params;
      this.user = this.authService.getLoginUserDetails();
      if(this.url === 'trf'){
        if(this.params.data?.createdBy === this.user?.email && (params.data?.status === 'PENDING' || params.data?.status === 'REJECTED')){
          this.isEditShow = true;
        }
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

  updateStatus(status: string){
    this.trfService.updateTRFStatus(status,this.params.data.trfId)
    .subscribe(
      (data: Number) =>{
         this.toastrService.success("Request "+status+" Successfully!", 'Success');
         setTimeout(() => {
          window.location.reload();
         }, 1000);
      },
      (err:any) =>{
        alert(err.error);
      }
    );
  }
}

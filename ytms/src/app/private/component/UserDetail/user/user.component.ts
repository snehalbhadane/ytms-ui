import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetail:any;
  

  constructor(private UserdetaileService :UserService,private _router: Router) { }

  ngOnInit(): void {

this.UserdetaileService.getUserList().subscribe((data: any)=>{

 this.userDetail=data;
 console.log(data);
},
(error) => {
  console.log(error);
})

  }

}

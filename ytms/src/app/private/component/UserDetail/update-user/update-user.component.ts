import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  roleList: any;
  UpdateUserRole= new FormGroup({

  
    userId :new FormControl(''),
    empCode :new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    gender :new FormControl(''),
    experience :new FormControl(''),
    location:new FormControl(''),
    project:new FormControl(''),
    designation:new FormControl(''),
    createdOn:new FormControl(''),
    updatedDate:new FormControl(''),
    role:new FormGroup({
    roleId:new FormControl('')

    })
});

  constructor(private UserdetaileService :UserService,private _router: Router,private acturouter:ActivatedRoute) { }

  message:boolean=false;

  ngOnInit(): void {

    this.role();
    this.acturouter.snapshot.params['userId']

    this.UserdetaileService.getUserById (this.acturouter.snapshot.params['userId']).subscribe((data: any)=>{

      console.log(data);

      // const userrrqueiredid=data.role.userId;
      // console.log("to find role idz====="+userrrqueiredid);


    this.UpdateUserRole=new FormGroup({

    userId :new FormControl(data['userId']),
    empCode :new FormControl(data['empCode']),
    firstName:new FormControl(data['firstName']),
    lastName:new FormControl(data['lastName']),
    email:new FormControl(data['email']),
    mobile:new FormControl(data['mobile']),
    gender :new FormControl(data['gender']),
    experience :new FormControl(data['experience']),
    location:new FormControl(data['location']),
    project:new FormControl(data['project']),
    designation:new FormControl(data['designation']),
    createdOn:new FormControl(data['createdOn']),
    updatedDate:new FormControl(data['updatedDate']),

    role:new FormGroup({
    roleId:new FormControl(data.role.roleId['roleId'])


  })
});

})


}
collectionsUpdate(){

  console.warn(this.UpdateUserRole.value);
  // this.trainerprofileService.updateTrainer(this.UpdateTrainer.value).subscribe((updateresult)=>{
  //   console.warn(updateresult)
  // })

  this.UserdetaileService.updateUserById(this.acturouter.snapshot.params['userId'],this.UpdateUserRole.value).subscribe((data)=>{
    console.log(data,"data udated")
    

    this.message=true;

});}

removeMsg(){
  this.message=false;
}

role(){
  this.UserdetaileService.getRole().subscribe((data:any)=>{
    this.roleList=data;
    console.log(data);
  },
  (error)=>{
    console.log(error);
  });
}

}

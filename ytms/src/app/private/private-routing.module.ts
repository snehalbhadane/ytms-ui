import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrfComponent } from './component/trf/trf.component';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateTrfComponent } from './component/trf/componets/create-trf/create-trf.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { TrainingComponent } from './component/training/training.component';
import { AuthGuard } from '../auth-guard/auth.guard';
import { ViewTrainingRequestComponent } from './component/trf/componets/view-training-request/view-training-request.component';
import { CtrComponent } from './component/ctr/ctr.component';
import { CtrassociatedetailsComponent } from './component/ctr/ctrassociatedetails/ctrassociatedetails.component';
import { SaveTrainerComponent } from './component/trainer/Componets/TrainerInfo/save-trainer/save-trainer.component';
import { ListTrainersComponent } from './component/trainer/Componets/TrainerInfo/list-trainers/list-trainers.component';
import { UpdateTrainerComponent } from './component/trainer/Componets/TrainerInfo/update-trainer/update-trainer.component';
import { ListTaskComponent } from './component/trainer/Componets/TrainerTask/list-task/list-task.component';
import { CompleteTrainerProfileComponent } from './component/trainer/Componets/TrainerInfo/complete-trainer-profile/complete-trainer-profile.component';
import { AddTaskComponent } from './component/trainer/Componets/TrainerTask/add-task/add-task.component';
import { CommonpageComponent } from './component/trainer/Componets/commonpage/commonpage.component';
import { UpdateTaskComponent } from './component/trainer/Componets/TrainerTask/update-task/update-task.component';
import { AddTrainingSummaryComponent } from './component/trainingsummary/components/add-training-summary/add-training-summary.component';
import { ViewDetailsTrainingSummaryComponent } from './component/trainingsummary/components/view-details-training-summary/view-details-training-summary.component';
import { UpdatetrainingsummaryComponent } from './component/trainingsummary/components/update-training-summary/updatetrainingsummary.component';
import { TrainingsummaryComponent } from './component/trainingsummary/trainingsummary.component';
import { UserComponent } from './component/UserDetail/user/user.component';
import { UpdateUserComponent } from './component/UserDetail/update-user/update-user.component';
import { TrfActionComponent } from './component/trf/componets/trf-action/trf-action.component';
import { TrainingPlanComponent } from './component/training/component/training-plan/training-plan.component';
import { ListTrainingPlanComponent } from './component/training/component/list-training-plan/list-training-plan.component';
import { UpdateTrainingPlanComponent } from './component/training/component/update-training-plan/update-training-plan.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'trf', component: TrfComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER","ROLE_TRAINER"] } },
      { path: 'trf/create', component: CreateTrfComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER","ROLE_TRAINER"] } },
      { path: 'trf/view-request', component: ViewTrainingRequestComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER"] } },
      //{ path: 'trf/view-request', component: TrfActionComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER","ROLE_USER"] }  },
      { path: 'trainer', component: TrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'trainer/save', component: SaveTrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'trainer/trainerslist', component: ListTrainersComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'trainer/view/:trainerId', component: CompleteTrainerProfileComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'trainer/trainerUpadte/:trainerId', component: UpdateTrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'trainer/trainersWithTasklist', component: ListTaskComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'trainer/addTask', component: AddTaskComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/updateTask/:trainerTaskId', component: UpdateTaskComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER",] }  },
      { path: 'trainer/common page', component:CommonpageComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'training', component: TrainingComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'training/plan', component: TrainingPlanComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'training/ListPlan', component: ListTrainingPlanComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'training/UpdatePlan/:trainingPlanId', component:UpdateTrainingPlanComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] }  },
      { path: 'summary', component: TrainingsummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'summary/addTS', component: AddTrainingSummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'summary/view/:trainingSummaryId', component: ViewDetailsTrainingSummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'summary/update/:trainingSummaryId', component:UpdatetrainingsummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_TRAINER","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'ctr', component: CtrComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'ctr/associates', component: CtrassociatedetailsComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'UserDetails', component: UserComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER"] } },
      { path: 'UserDetails/userUpadte/:userId', component: UpdateUserComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN","ROLE_MANAGER","TRAING_MANGER"] }  }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
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

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'trf', component: TrfComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] } },
      { path: 'trf/create', component: CreateTrfComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] } },
      { path: 'trf/view-request', component: ViewTrainingRequestComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] } },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_TRAINER"] }  },
      { path: 'trainer', component: TrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/save', component: SaveTrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/trainerslist', component: ListTrainersComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/view/:trainerId', component: CompleteTrainerProfileComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/trainerUpadte/:trainerId', component: UpdateTrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/trainersWithTasklist', component: ListTaskComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/addTask', component: AddTaskComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/updateTask/:trainerTaskId', component: UpdateTaskComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'trainer/common page', component:CommonpageComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] }  },
      { path: 'training', component: TrainingComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] }  },
      { path: 'summary', component: TrainingsummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] } },
      { path: 'summary/addTS', component: AddTrainingSummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] } },
      { path: 'summary/view/:trainingSummaryId', component: ViewDetailsTrainingSummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] } },
      { path: 'summary/update/:trainingSummaryId', component:UpdatetrainingsummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_TRAINER"] } },
      { path: 'ctr', component: CtrComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] } },
      { path: 'ctr/associates', component: CtrassociatedetailsComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
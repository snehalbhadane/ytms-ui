import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrfComponent } from './component/trf/trf.component';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateTrfComponent } from './component/trf/componets/create-trf/create-trf.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { TrainingComponent } from './component/training/training.component';
import { TrainingsummaryComponent } from './component/trainingsummary/trainingsummary.component';
import { AuthGuard } from '../auth-guard/auth.guard';
import { ViewTrainingRequestComponent } from './component/trf/componets/view-training-request/view-training-request.component';
import { CtrComponent } from './component/ctr/ctr.component';
import { CtrassociatedetailsComponent } from './component/ctr/ctrassociatedetails/ctrassociatedetails.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'trf', component: TrfComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER"] } },
      { path: 'trf/create', component: CreateTrfComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER"] } },
      { path: 'trf/view-request', component: ViewTrainingRequestComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] } },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER","ROLE_ADMIN"] }  },
      { path: 'trainer', component: TrainerComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] }  },
      { path: 'training', component: TrainingComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] }  },
      { path: 'summary', component: TrainingsummaryComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] } },
      { path: 'ctr', component: CtrComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER"] } },
      { path: 'ctr/associates', component: CtrassociatedetailsComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_USER"] } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

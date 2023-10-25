import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { TrfComponent } from './component/trf/trf.component';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateTrfComponent } from './component/trf/componets/create-trf/create-trf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewtrfComponent } from './component/trf/componets/viewtrf/viewtrf.component';
import { TrfActionComponent } from './component/trf/componets/trf-action/trf-action.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { TrainingComponent } from './component/training/training.component';
import { TrainingsummaryComponent } from './component/trainingsummary/trainingsummary.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewTrainingRequestComponent } from './component/trf/componets/view-training-request/view-training-request.component';
import { CtrComponent } from './component/ctr/ctr.component';
import { CtrassociatedetailsComponent } from './component/ctr/ctrassociatedetails/ctrassociatedetails.component';
import { AddTrainingSummaryComponent } from './component/trainingsummary/components/add-training-summary/add-training-summary.component';
import { DeletTrainerComponent } from './component/trainer/Componets/TrainerInfo/delet-trainer/delet-trainer.component';
import { SaveTrainerComponent } from './component/trainer/Componets/TrainerInfo/save-trainer/save-trainer.component';
import { ListTrainersComponent } from './component/trainer/Componets/TrainerInfo/list-trainers/list-trainers.component';
import { UpdateTrainerComponent } from './component/trainer/Componets/TrainerInfo/update-trainer/update-trainer.component';
import { AddTaskComponent } from './component/trainer/Componets/TrainerTask/add-task/add-task.component';
import { ListTaskComponent } from './component/trainer/Componets/TrainerTask/list-task/list-task.component';
import { DeleteTaskComponent } from './component/trainer/Componets/TrainerTask/delete-task/delete-task.component';
import { UpdateTaskComponent } from './component/trainer/Componets/TrainerTask/update-task/update-task.component';
import { CompleteTrainerProfileComponent } from './component/trainer/Componets/TrainerInfo/complete-trainer-profile/complete-trainer-profile.component';
import { CommonpageComponent } from './component/trainer/Componets/commonpage/commonpage.component';
import { UpdatetrainingsummaryComponent } from './component/trainingsummary/components/update-training-summary/updatetrainingsummary.component';
import { UserComponent } from './component/UserDetail/user/user.component';
import { UpdateUserComponent } from './component/UserDetail/update-user/update-user.component';
import { TrainingPlanComponent } from './component/training/component/training-plan/training-plan.component';
import { TrainingPerformanceReportComponent } from './component/training/component/training-performance-report/training-performance-report.component';
import { DreyFusReportComponent } from './component/training/component/drey-fus-report/drey-fus-report.component';
import { DailyProgressReportComponent } from './component/training/component/daily-progress-report/daily-progress-report.component';
import { ListTrainingPlanComponent } from './component/training/component/list-training-plan/list-training-plan.component';
import { UpdateTrainingPlanComponent } from './component/training/component/update-training-plan/update-training-plan.component';


@NgModule({
  declarations: [
    PrivateComponent,
    TrfComponent,
    DashboardComponent,
    CreateTrfComponent,
    TrfActionComponent,
    TrainerComponent,
    TrainingComponent,
    TrainingsummaryComponent,
    ViewTrainingRequestComponent,
    CtrComponent,
    CtrassociatedetailsComponent,
    AddTrainingSummaryComponent,
    UpdatetrainingsummaryComponent,
    DeletTrainerComponent,
    SaveTrainerComponent,
    ListTrainersComponent,
    UpdateTrainerComponent,
    AddTaskComponent,
    ListTaskComponent,
    DeleteTaskComponent,
    UpdateTaskComponent,
    CompleteTrainerProfileComponent,
    CommonpageComponent,
    UserComponent,
    UpdateUserComponent,
    TrainingPlanComponent,
    TrainingPerformanceReportComponent,
    DreyFusReportComponent,
    DailyProgressReportComponent,
    ListTrainingPlanComponent,
    UpdateTrainingPlanComponent,

  ],
  imports: [
    CommonModule,
    AgGridModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [PrivateComponent]
})
export class PrivateModule { }
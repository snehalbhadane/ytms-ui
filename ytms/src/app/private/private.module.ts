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
import { ViewTrainingSummaryComponent } from './component/trainingsummary/components/view-training-summary/view-training-summary.component';

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
    ViewTrainingSummaryComponent
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

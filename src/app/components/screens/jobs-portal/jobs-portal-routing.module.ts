import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {NewJobsComponent} from './new-jobs/new-jobs.component';
import {DASHBOARD_URL, NEW_JOBS_PATH} from '../../../shared/application-core/app-frontend-screens';


const routes: Routes = [
  { path: '',   redirectTo: `/${NEW_JOBS_PATH}`, pathMatch: 'full'},
  {
    path: NEW_JOBS_PATH,
    pathMatch: 'full',
    component: NewJobsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsPortalRoutingModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {AuthGuard} from '../../config/auth.guard';
import {DASHBOARD_PATH, DASHBOARD_URL, JOB_PORTAL_PATH} from '../../shared/application-core/app-frontend-screens';
import {DashboardModule} from '../screens/dashboard/dashboard.module';
import {JobsPortalModule} from '../screens/jobs-portal/jobs-portal.module';
import {DashboardComponent} from '../screens/dashboard/dashboard.component';


const canActivate = [AuthGuard];

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '',   pathMatch: 'full'},
      { path: DASHBOARD_PATH, component: DashboardComponent},
      { path: JOB_PORTAL_PATH, loadChildren: () => JobsPortalModule}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {BlockUIModule} from 'ng-block-ui';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, DashboardRoutingModule, BlockUIModule.forRoot()
  ]
})
export class DashboardModule { }

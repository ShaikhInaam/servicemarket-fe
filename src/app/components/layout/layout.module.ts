import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {SafePipe} from '../../pipe/safe/safe.pipe';
import {BlockUIModule} from 'ng-block-ui';
import {DashboardComponent} from '../screens/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LayoutComponent, SafePipe, DashboardComponent],
  imports: [
    CommonModule, LayoutRoutingModule, BlockUIModule.forRoot()
  ]
})
export class LayoutModule { }

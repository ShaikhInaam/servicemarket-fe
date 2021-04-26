import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {jqxNotificationModule} from 'jqwidgets-ng/jqxnotification';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './components/login/login.component';
import {ErrorInterceptor} from './config/error.interceptor';
import {AuthInterceptor} from './config/auth.interceptor';
import {AppRoutingModule} from './app-routing.module';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import {BlockUIModule} from 'ng-block-ui';
import { NewJobsComponent } from './components/screens/jobs-portal/new-jobs/new-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    NewJobsComponent
  ],
  imports: [
    CommonModule, BrowserModule, RouterModule,
    AppRoutingModule, ReactiveFormsModule, jqxNotificationModule,
    BrowserAnimationsModule, HttpClientModule, NgbModule, FormsModule,
    BlockUIModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

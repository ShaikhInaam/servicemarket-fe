import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {
  DASHBOARD_PATH,
  DASHBOARD_URL, SCREENS_PATH,
  SIGN_IN_PATH,
  SIGN_IN_URL,
  SIGN_UP_PATH,
  SIGN_UP_URL
} from './shared/application-core/app-frontend-screens';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {LayoutModule} from './components/layout/layout.module';
import {AuthGuard} from './config/auth.guard';


const routes: Routes = [
  { path: '',   redirectTo: SIGN_IN_URL, pathMatch: 'full' },
  { path: SIGN_IN_PATH, component: LoginComponent },
  { path: SIGN_UP_PATH, component: UserRegistrationComponent },
  { path: SCREENS_PATH, loadChildren: () => LayoutModule , },
  { path: '**', redirectTo: SCREENS_PATH },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

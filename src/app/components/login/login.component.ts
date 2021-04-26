import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {DASHBOARD_URL, SIGN_UP_URL} from '../../shared/application-core/app-frontend-screens';
import {HttpResponseModel} from '../../models/http-response.model';
import {LoginRequestModel} from './login-request.model';
import {NotificationService} from '../../service/notification.service';
import {BlockUI, NgBlockUI} from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @BlockUI('block-login') blockUIList: NgBlockUI;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
       this.router.navigate([DASHBOARD_URL]);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || DASHBOARD_URL;
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.blockUIList.start('Loading...'); // Start blocking element only
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const loginRequest: LoginRequestModel = new LoginRequestModel();
    loginRequest.transactionId = '123';
    loginRequest.username = this.f.username.value;
    loginRequest.password = this.f.password.value

    this.loading = true;
    this.authenticationService.login(loginRequest)
      .pipe(first())
      .subscribe((data: HttpResponseModel) => {
          if (data.responseCode === '00100') {
            this.router.navigate([this.returnUrl]);
          }else {
            this.error = data.responseMessage;
          }
          this.blockUIList.stop(); // Stop blocking
          NotificationService.error(this.error);
        },
        error => {
          this.error = error;
          NotificationService.error(this.error);
          this.blockUIList.stop(); // Stop blocking
        });
  }

  // tslint:disable-next-line:typedef
  signUp(){
    this.router.navigate([SIGN_UP_URL]);
  }
}

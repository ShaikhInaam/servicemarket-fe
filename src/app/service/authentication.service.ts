import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/user.model';
import {environment} from '../../environments/environment';
import {LOGIN_API} from '../shared/application-core/api-urls';
import {HttpResponseModel} from '../models/http-response.model';
import {HttpServiceService} from './http-service.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<HttpResponseModel>;
  public user: Observable<HttpResponseModel>;

  constructor(
    private router: Router,
    private http: HttpServiceService
  ) {
    this.userSubject = new BehaviorSubject<HttpResponseModel>(JSON.parse(sessionStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): HttpResponseModel {
    return this.userSubject.value;
  }

  // tslint:disable-next-line:typedef
  login(requestObj) {
    return this.http.post(LOGIN_API, requestObj)
      .pipe(map((response: HttpResponseModel) => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        if (response.responseCode === '00100') {
          sessionStorage.setItem('user', JSON.stringify(response));
          this.userSubject.next(response);
        }
        return response;
      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}

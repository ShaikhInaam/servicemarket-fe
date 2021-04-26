import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
import {AuthenticationService} from '../service/authentication.service';
import {HttpResponseModel} from '../models/http-response.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add header with basic auth credentials if user is logged in and request is to the api url
    const user: HttpResponseModel = this.authenticationService.userValue;
    const isLoggedIn = user && user.response?.userToken;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.response.userToken.token}`
        }
      });
    }

    return next.handle(request);
  }
}

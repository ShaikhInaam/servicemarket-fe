import { Component, OnInit } from '@angular/core';
import {SIGN_IN_URL, SIGN_UP_URL} from '../../shared/application-core/app-frontend-screens';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  signIn(){
    this.router.navigate([SIGN_IN_URL]);
  }
}

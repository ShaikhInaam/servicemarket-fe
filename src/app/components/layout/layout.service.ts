import {Injectable} from '@angular/core';
import {HttpServiceService} from '../../service/http-service.service';
import {BaseRequestModel} from '../../models/base-request.model';
import {MENU_API} from '../../shared/application-core/api-urls';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private http: HttpServiceService) {}

  getMenus(request: BaseRequestModel): Observable<any>{
    return  this.http.post(MENU_API, request);
  }
}

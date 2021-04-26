import {BaseRequestModel} from '../../models/base-request.model';

export class LoginRequestModel extends BaseRequestModel{
  username: string;
  password: string;
}

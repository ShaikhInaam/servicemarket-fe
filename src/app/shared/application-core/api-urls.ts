import {environment} from '../../../environments/environment';

export const BASE_URL = environment.apiUrl;
export const LOGIN_API = BASE_URL + '/auth/login';
export const MENU_API = BASE_URL + '/portal/menu';

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  get(url:string){
    // const headers = {
    //   "Access-Control-Allow-Origin": "*",
    //   "Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NTY1Nzg5MEBnbWFpbC5jb20iLCJleHAiOjE1OTE3NTMxOTYsImlhdCI6MTU5MTczNTE5Nn0.sMZ0dDQsJyO2jTWlf02TCBAqPr7hECZttZepgVbkDiiKHxAlcXmSaRBrAV0BR8Am2THtg3Y3IJp-GWmk5SvG5w"
    // };
    return this.http.get(url);
  }

  post(url:string,requestBody:[]){
    return this.http.post(url,requestBody)
  }
}

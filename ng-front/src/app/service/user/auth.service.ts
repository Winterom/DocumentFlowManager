import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponse} from "../response_object/login-response";
import {HttpClient} from "@angular/common/http";
import {AuthApiService} from "../request_api/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private api:AuthApiService) { }

  public login(email:string,password:string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.api.login, {
      email,
      password
    }, this.api.httpOptions);
  }

  refreshToken(refreshToken: string) {
    return this.http.post<LoginResponse>(this.api.refresh,{refreshToken: refreshToken},this.api.httpOptions)
  }
}

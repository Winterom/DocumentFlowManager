import { Injectable } from '@angular/core';
import {CommonApi} from "./common-api";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends CommonApi{
  constructor() {
    super();
  }
  private _serviceUserApi = 'auth/api/v1/user';
  private _serviceAuthApi = 'auth/api/v1/auth'
  private _serviceProfileApi = 'auth/api/v1/profiles'
  private _login = '/login';
  private _register = '/register';
  private _getAllUser = '/users';
  private _getProfile = '/current/';
  private _updateOrSave = '/update';
  private _getUserInfo = '/profile';


  get login(): string {
    return super.API_ROOT+this._serviceAuthApi+this._login;
  }

  get register(): string {
    return super.API_ROOT+this._serviceAuthApi+this._register;
  }

  get getAllUser(): string {
    return super.API_ROOT+this._serviceUserApi+this._getAllUser;
  }

  get getProfile(): string {
    return super.API_ROOT+this._serviceProfileApi+this._getProfile;
  }

  get updateOrSave(): string {
    return super.API_ROOT+this._serviceUserApi+this._updateOrSave;
  }

  get getUserInfo(): string {
    return super.API_ROOT+this._serviceProfileApi+this._getUserInfo;
  }
}

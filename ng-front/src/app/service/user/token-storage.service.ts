import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  public parseJwt (token: string): any {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c){
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    let tok = JSON.parse(jsonPayload);
    console.log(tok)
    return tok;
  }

  getToken():string|null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }
  public isExpired():boolean{
    return false;
  }

  public deleteToken(){
    window.localStorage.removeItem(TOKEN_KEY);
  }

  getRefreshToken():string|null {
    return window.localStorage.getItem(REFRESHTOKEN_KEY);
  }
  public saveRefreshToken(token: string): void {
    window.localStorage.removeItem(REFRESHTOKEN_KEY);
    window.localStorage.setItem(REFRESHTOKEN_KEY, token);
  }
  public deleteRefreshToken():void{
    window.localStorage.removeItem(REFRESHTOKEN_KEY);
  }

  signOut() {
    this.deleteToken();
    this.deleteRefreshToken();
  }
}

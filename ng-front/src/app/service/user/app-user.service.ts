import {Injectable, OnInit} from '@angular/core';
import {AuthApiService} from "../request/auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AppUserService implements OnInit{
  constructor(private api:AuthApiService) { }
  ngOnInit(): void {

  }

  login(login:string,password:string){

  }
  getToken():string {
    return '';
  }
}

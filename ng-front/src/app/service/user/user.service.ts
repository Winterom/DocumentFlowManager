import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";
import {EventBusService} from "../bus/event-bus.service";
import {Subscription} from "rxjs";
import {EventType} from "../bus/EventType";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit, OnDestroy{
  private _isLoggedIn = false;
  private _eventBusSub?: Subscription;


  constructor(private storageService:TokenStorageService,private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this._isLoggedIn = !!this.storageService.getToken();
    this._eventBusSub = this.eventBusService.on(EventType.LOGOUT, () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    if (this._eventBusSub)
      this._eventBusSub.unsubscribe();
  }
  private logout(): void {
    this.storageService.signOut();
    this._isLoggedIn = false;
  }


  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public saveUser(token:string):void{
    this.storageService.saveToken(token);
    this.storageService.parseJwt(token);
  }
  get eventBusSub(): Subscription {
    return <Subscription>this._eventBusSub;
  }
}

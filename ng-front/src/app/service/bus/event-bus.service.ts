import { Injectable } from '@angular/core';
import {filter, map, Subject, Subscription} from "rxjs";
import {EventData} from "./event-data";
import {EventType} from "./EventType";



@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject<EventData>();

  constructor() { }
  /*генерируем*/
  emit(event: EventData) {
    this.subject$.next(event);
  }
  /*подписываемся*/
  on(eventName: EventType, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EventData) => e.eventType === eventName),
      map((e: EventData) => e["value"])).subscribe(action);
  }
}

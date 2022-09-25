import {EventType} from "./EventType";

export class EventData{
  eventType: EventType;
  value: any;

  constructor(name: EventType, value: any) {
    this.eventType = name;
    this.value = value;
  }
}

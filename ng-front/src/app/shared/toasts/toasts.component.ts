import {Component, OnInit} from '@angular/core';
import {ToastData} from "./ToastData";
import {ToastType} from "./ToastType";
import {EventBusService} from "../../service/bus/event-bus.service";
import {EventType} from "../../service/bus/EventType";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  data:ToastData;
  private subs: Subscription | undefined;
  constructor(private eventBus:EventBusService) {
    this.data = new class implements ToastData {
      text: string = 'Undefine';
      title: string = 'Undefine';
      type: ToastType = 'danger';
    }
  }

  ngOnInit(): void {
    this.subs = this.eventBus.on(EventType.ERROR_TOAST, (res:ToastData)=>{
      this.data = res;
    })
  }

}

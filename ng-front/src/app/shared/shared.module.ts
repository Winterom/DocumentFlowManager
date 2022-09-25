import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import { MailWidgetComponent } from './header/mail-widget/mail-widget.component';
import { EventWidgetComponent } from './header/event-widget/event-widget.component';
import { ChatWidgetComponent } from './header/chat-widget/chat-widget.component';
import { ToastsComponent } from './toasts/toasts.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MailWidgetComponent,
    EventWidgetComponent,
    ChatWidgetComponent,
    ToastsComponent
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user/user.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private user:UserService, private route:Router) {
  }
  ngOnInit(): void {
    if (this.user.isLoggedIn){
      this.route.navigate(['']);
    }
  }

}

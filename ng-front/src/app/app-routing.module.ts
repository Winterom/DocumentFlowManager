import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'login',
    component:LoginComponent},
  {path:'',
    canActivate:[AuthGuard],
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

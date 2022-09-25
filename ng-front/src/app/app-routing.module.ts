import { NgModule } from '@angular/core';
import {RouterModule, RouterStateSnapshot, Routes, TitleStrategy} from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {Title} from "@angular/platform-browser";

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
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: AppRoutingModule},
  ]
})
export class AppRoutingModule extends TitleStrategy{
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
     const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`Документооборот | ${title}`);
    }
  }
}

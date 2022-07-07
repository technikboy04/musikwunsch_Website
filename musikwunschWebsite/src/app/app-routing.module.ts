
import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { DjViewComponent } from './dj-view/dj-view.component';
import { GastViewComponent } from './gast-view/gast-view.component'
import { ImpressumComponent } from './impressum/impressum.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationGuard} from './authentication.guard'; 

const routes: Routes =[

  {
    path:'',
    component: GastViewComponent
  },
  {
    path:'dj-view',
    component: DjViewComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'datenschutzerklaerung',
    component: DatenschutzerklaerungComponent
  },
  {
    path:'impressum',
    component: ImpressumComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'gast-view',
    component: GastViewComponent
  }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})


export class AppRoutingModule { }

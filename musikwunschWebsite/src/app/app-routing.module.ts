import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DjViewComponent } from './dj-view/dj-view.component';
import { GastBodyComponent } from './gast-body/gast-body.component';

const routes: Routes =[
  {
  path:'',
  pathMatch: 'full',
  component: AppComponent
  },
  {
    path:'dj-view',
    component: DjViewComponent
  },
  {
    path:'gast-body',
    component: GastBodyComponent
  }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})


export class AppRoutingModule { }


import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DjViewComponent } from './dj-view/dj-view.component';
import { GastViewComponent } from './gast-view/gast-view.component'

const routes: Routes =[

  {
    path:'',
    component: GastViewComponent
  },
  {
    path:'dj-view',
    component: DjViewComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DjViewComponent } from './dj-view/dj-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MusicCardComponent } from './music-card-dj/music-card.component';
import { SitebarDjComponent } from './sitebar-dj/sitebar-dj.component';
import { SitebarItemComponent } from './sitebar-item/sitebar-item.component';
import { GastViewComponent } from './gast-view/gast-view.component';
import { MusicCardUserComponent } from './music-card-user/music-card-user.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DjViewComponent,
    HeaderComponent,
    MusicCardComponent,
    SitebarDjComponent,
    SitebarItemComponent,
    GastViewComponent,
    MusicCardUserComponent,
    SearchBarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

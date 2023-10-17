import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNameComponent } from './page-name/page-name.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    LandingPageComponent,
    PageNameComponent,
    ItemCardComponent,
    MovieListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

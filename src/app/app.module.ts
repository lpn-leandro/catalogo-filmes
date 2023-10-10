import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PageNameComponent } from './page-name/page-name.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    LandingPageComponent,
    PageNameComponent,
    ItemCardComponent,
    MovieListComponent,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule,
    RegisterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

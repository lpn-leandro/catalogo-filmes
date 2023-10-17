import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, data: {currentPage: "Watchza"}},
  { path: 'movie-list', component: MovieListComponent, data: {currentPage: "Meus Filmes"}},
  {  path: 'register', component: RegisterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

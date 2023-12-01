import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieListComponent } from './serie-list/serie-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, data: {currentPage: "Watchza"}},
  { path: 'movie-list', component: MovieListComponent, data: {currentPage: "Meus Filmes"}},
  { path: 'register', component: RegisterComponent, data: {currentPage: "Cadastro"}},
  { path: 'movie-detail/:id', component: MovieDetailComponent, data:{currentPage: "Detalhes"}},
  { path: 'serie-detail/:id', component: SerieDetailComponent, data:{currentPage: "Detalhes"}},
  { path: 'serie-list', component: SerieListComponent, data: {currentPage: "Meus Filmes"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

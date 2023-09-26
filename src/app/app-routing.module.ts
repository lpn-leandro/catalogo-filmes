import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, data: {currentPage: "Meus Filmes"}},
  { path: 'movie-list', component: MovieListComponent, data: {currentPage: "Meus Filmes"}},
  { path: 'register', component: RegisterComponent, data: {currentPage: "Cadastro"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

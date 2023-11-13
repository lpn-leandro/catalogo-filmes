import { Component, inject, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
//import {a } from 'src/'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    ItemCardComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    CommonModule,
  ],
})
export class MovieListComponent{
  currentPage = 'Meus Filmes';

  movieList: Movie[] = [];
  movieService: MovieService = inject(MovieService);
  
  constructor() {
    this.movieService.getAllMovies().then((movieList: Movie[]) => {
      this.movieList = movieList;
    });
  }
}

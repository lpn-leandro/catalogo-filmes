import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';
import Movies from '../model/movies';


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

  rotaMovie = '/movie-detail'
  rotaPhoto = '/movie-detail'
  movieList: Movies[] = [];
  movieService: MovieService = inject(MovieService);
  
  constructor() {
    this.movieService.getAllMovies().then((movieList: Movies[]) => {
      this.movieList = movieList;
    });

  }


}

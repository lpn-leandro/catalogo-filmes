import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie'


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class MovieDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movie: Movie | undefined;

  constructor() {
    const movieId = parseInt(this.route.snapshot.params['id'], 10);
    this.movieService.getMovieById(movieId).then(movie => {
    this.movie = movie;
  });
  }
}

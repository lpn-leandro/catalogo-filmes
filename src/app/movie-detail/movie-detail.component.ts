import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import Movies from '../model/movies';
import { PageService } from '../page.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    DatePipe,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class MovieDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movie: Movies | undefined;
  title: string | undefined;

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void | undefined {
    const movieId = parseInt(this.route.snapshot.params['id'], 10);
    this.movieService.getMovieById(movieId).then((movie) => {
      this.movie = movie;
      this.title = movie?.name;
      this.pageService.setPageName(this.title || '');
    });
  }
}

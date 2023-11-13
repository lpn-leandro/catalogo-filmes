import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://localhost:3000/movies';

  async  getAllMovies(): Promise<Movie[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  
  async getMovieById(id: number): Promise<Movie | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}

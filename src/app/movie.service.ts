import { Injectable } from '@angular/core';
import Movies from './model/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://localhost:3000/movies';

  async  getAllMovies(): Promise<Movies[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  
  async getMovieById(id: number): Promise<Movies | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}

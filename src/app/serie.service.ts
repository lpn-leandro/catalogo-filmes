import { Injectable } from '@angular/core';
import { Serie } from './serie';
import series from './model/series';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  url = 'http://localhost:3000/series';

  async  getAllSeries(): Promise<series[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  
  async getSerieById(id: number): Promise<series | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}

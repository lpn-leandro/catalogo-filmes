import { Injectable } from '@angular/core';
import Movies from './model/movies';
import series from './model/series';

@Injectable({
  providedIn: 'root'
})
export class MovieServerService {

  constructor() { }

  saveMovies(movies: Movies) {
    // Salva os filmes no localStorage
    localStorage.setItem('movies', JSON.stringify(movies));

    // Envia os filmes para o servidor
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movies),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Filme cadastrado com sucesso!');
      //window.location.href = '../../index.html'; // Redireciona para a página inicial
    })
    .catch(error => {
      console.error('Erro ao cadastrar o filme:', error);
    });
  }

  saveSeries(series: series) {
    // Salva os filmes no localStorage
    localStorage.setItem('movies', JSON.stringify(series));

    // Envia os filmes para o servidor
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(series),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Filme cadastrado com sucesso!');
      //window.location.href = '../../index.html'; // Redireciona para a página inicial
    })
    .catch(error => {
      console.error('Erro ao cadastrar o filme:', error);
    });
  }
}

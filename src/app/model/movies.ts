import { SafeResourceUrl } from '@angular/platform-browser';

export default class Movies {
  id?: number;
  photo?: string;
  name?: string;
  producer?: string;
  director?: string;
  releaseDate?: string;
  nota?: string;
  categoria?: string;
  status?: string;
  sinopse?: string;

 
 

  constructor(
    photo: string,
    name: string,
    producer: string,
    director: string,
    releaseDate: string ,
    nota: string,
    categoria: string,
    status: string,
    sinopse: string
  ) {
    this.photo = photo;
    this.name = name;
    this. producer =  producer;
    this.director = director;
    this.releaseDate = releaseDate;
    this.categoria = categoria;
    this.status = status;
    this.sinopse = sinopse;
    this.nota = nota;
  }
}

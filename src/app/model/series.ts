export default class series{
    id?: number;
    photo?: string;
    name?: string;
    producer?: string;
    director?: string;
    releaseDate?: string;
    nota?: number;
    gender?: string;
    check?: string;
    sinopse?: string;
    seasons?: number;
   
    constructor(
        
    photo: string,
    name: string,
    producer: string,
    director: string,
    releaseDate: string,
    nota: number,
    gender: string,
    check: string,
    sinopse: string,
    seasons: number,
    ){
        this.photo = photo;
        this.name = name;
        this.producer = producer;
        this.director = director;
        this.releaseDate = releaseDate;
        this.gender = gender,
        this.check = check;
        this.sinopse =sinopse;
        this.seasons =seasons;
        this.nota = nota;
    }
}
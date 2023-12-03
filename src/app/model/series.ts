export default class series{
    id?: number;
    photo?: string;
    name?: string;
    producer?: string;
    director?: string;
    releaseDate?: string;
    gender?: string;
    check?: string;
    sinopse?: string;
    seasons?: string;

    constructor(
        id: number,
    photo: string,
    name: string,
    producer: string,
    director: string,
    releaseDate: string,
    gender: string,
    check: string,
    sinopse: string,
    seasons: string,
    ){
        this.id= id;
        this.photo = photo;
        this.name = name;
        this.producer = producer;
        this.director = director;
        this.releaseDate = releaseDate;
        this.gender = gender,
        this.check = check;
        this.sinopse =sinopse;
        this.seasons =seasons;
    }
}
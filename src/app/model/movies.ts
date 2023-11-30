import { SafeResourceUrl } from '@angular/platform-browser';

export default class Movies {
  id?: number;
  capa?: string;
  nome?: string;
  estudio?: string;
  diretor?: string;
  dataLancamento?: string;
  nota?: number;
  categoria?: string;
  status?: string;
  sinopse?: string;

  constructor(
    capa: string,
    nome: string,
    estudio: string,
    diretor: string,
    dataLancamento: string ,
    nota: number,
    categoria: string,
    status: string,
    sinopse: string
  ) {
    this.capa = capa;
    this.nome = nome;
    this.estudio = estudio;
    this.diretor = diretor;
    this.dataLancamento = dataLancamento;
    this.categoria = categoria;
    this.status = status;
    this.sinopse = sinopse;
    this.nota = nota;
  }
}

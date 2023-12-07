import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import Movies from '../model/movies';
import { MovieServerService } from '../movie-server.service';
import {
  EnabledBlockingInitialNavigationFeature,
  Router,
} from '@angular/router';
import { PageService } from '../page.service';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    CommonModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class RegisterComponent implements AfterViewInit, OnInit {
  movies?: Movies;
  matcher = new MyErrorStateMatcher();
  title = 'Cadastrar Filme';

  capa: string = '';
  nome: string = '';
  estudio: string = '';
  diretor: string = '';
  descricao: string = '';
  data: Date = new Date();
  dataLancamento: string = '';
  categoria: string = '';
  statusi: string = '';
  nota: string = '';
  mostrarFormulario: boolean = false;
  atualizaHora: any;
  horaDeHollywood: string = '';
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieServer: MovieServerService,
    private rotas: Router,
    private pageService: PageService
  ) {
    this.myForm = this.fb.group({
      capa: ['', [Validators.required]],
      nome: ['', Validators.required],
      estudio: ['', Validators.required],
      diretor: ['', Validators.required],
      descricao: ['', Validators.required],
      dataLancamento: ['', Validators.required],
      nota: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    alert('Carregando...');
    this.mostrarFormulario = true;
    alert('Sua pagima esta rodando no localhost port 4200:');
  }

  ngOnInit(): void {
    this.atualizaHora = setInterval(() => {
      this.data = new Date();
      this.horaDeHollywood = this.data.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
      });
    }, 1000);
    this.pageService.setPageName(this.title);
  }

  onSubmit() {
    let movie = new Movies(
      this.capa,
      this.nome,
      this.estudio,
      this.diretor,
      this.dataLancamento,
      this.nota,
      this.categoria,
      this.statusi,
      this.descricao
    );
    if (this.myForm.valid) {
      // Save movie data to the server
      this.movieServer.saveMovies(movie);

      alert('Filme salvo com susseso');
      this.rotas.navigate(['/movie-list']);
    } else {
      alert('cachorro');
    }

    alert('ola mundo');
  }

  categorias = new FormControl('');
  Listadecategorias: string[] = [
    'Terror',
    'Comedia',
    'Suspense',
    'Ação',
    'Drama',
    'Documentario',
    'Romance',
    'Ficção científica',
  ];

  status = new FormControl('');
  Listadestatus: string[] = ['Assistido', 'Não Assistido', 'Desejo Assistir'];

  Voltar() {
    this.rotas.navigate(['/movie-list']);
  }
}

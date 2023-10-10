import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgIf, NgFor} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
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
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
      ]
  
})
export class RegisterComponent {
 
  matcher = new MyErrorStateMatcher();
  categorias = new FormControl('');
  Listadecategorias: string[] = ['Terror', 'Comedia', 'Suspense', 'Ação', 'Drama', 'Documentario', 'Romance', 'Ficção científica'];
  status = new FormControl('');
  Listadestatus: string[] = ['Assistido', 'Não Assistido', 'Desejo Assistir'];
  Qualidade(value: number): string {
    if (value >= 1) {
      return Math.round(value / 1) + 'm';
    }
    return `${value}`;
  }


  }

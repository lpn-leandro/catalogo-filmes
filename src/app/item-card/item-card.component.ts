import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Movie } from '../movie';
import { Serie } from '../serie';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule, MatMenuModule, MatIconModule],
})
export class ItemCardComponent {
  @Input() movie!: Movie;
  @Input() serie!: Serie;
}

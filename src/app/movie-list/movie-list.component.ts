import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [MatGridListModule, ItemCardComponent, MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
})
export class MovieListComponent {
  currentPage = 'Meus Filmes';
}

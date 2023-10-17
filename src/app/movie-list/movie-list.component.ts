import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  standalone: true,
  imports: [MatGridListModule, ItemCardComponent],
})
export class MovieListComponent {
  currentPage = 'Meus Filmes';
}

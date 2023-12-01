import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Serie } from '../serie';
import { CommonModule } from '@angular/common';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    ItemCardComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    CommonModule,
  ],
})
export class SerieListComponent {
  currentPage = 'Meus Filmes';

  serieList: Serie[] = [];
  serieService: SerieService = inject(SerieService);

  constructor() {
    this.serieService.getAllSeries().then((serieList: Serie[]) => {
      this.serieList = serieList;
    });
  }
}

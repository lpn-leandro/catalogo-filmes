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
import Movies from '../model/movies';
import Series from '../model/series';
import { PageService } from '../page.service';

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
  title = 'Séries';
  serieList: Series[] = [];

  constructor(private serieService: SerieService,
    private pageService: PageService) {
    
  }

  ngOnInit(): void {
    this.pageService.setPageName(this.title);
    this.serieService.getAllSeries().then((serieList: Series[]) => {
      this.serieList = serieList;
    });
  }
}

import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    DatePipe,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class SerieDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  serieService = inject(SerieService);
  serie: Serie | undefined;

  constructor() {
    const serieId = parseInt(this.route.snapshot.params['id'], 10);
    this.serieService.getSerieById(serieId).then((serie) => {
      this.serie = serie;
    });
  }
}

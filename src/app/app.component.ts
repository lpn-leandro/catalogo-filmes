import { Component } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catalogo-filmes';
  pageName: string = 'Meus Filmes';

  constructor(private pageService: PageService) {
    this.pageService.setPageName(this.pageName);
  }
}
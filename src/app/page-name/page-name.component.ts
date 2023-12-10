import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageService } from '../page.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-name',
  templateUrl: './page-name.component.html',
  styleUrls: ['./page-name.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class PageNameComponent {
  @Input() pageName!: string;

  constructor(
    private pageService: PageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pageService.pageName$.subscribe((name) => {
      this.pageName = name.toUpperCase();
    });

    // Assine eventos de navegação para atualizar dinamicamente o título da página
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const pageTitle = this.getPageTitle(this.activatedRoute);
        this.pageService.setPageName(pageTitle);
      });
  }

  private getPageTitle(route: ActivatedRoute): string {
    let title = '';
    route.firstChild?.url.subscribe((segments) => {
      if (segments.length > 0) {
        title = segments[segments.length - 1].path;
      }
    });
    return title;
  }
}

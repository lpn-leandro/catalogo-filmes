import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
})
export class LandingPageComponent {
  title = 'WatchZa';

  constructor(private pageService: PageService) {}
  
  ngOnInit(): void {
    this.pageService.setPageName(this.title);
  }
}

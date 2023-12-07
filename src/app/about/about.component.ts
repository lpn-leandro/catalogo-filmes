import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Sobre';

  constructor(private pageService: PageService) {}
  
  ngOnInit(): void {
    this.pageService.setPageName(this.title);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private pageNameSubject = new BehaviorSubject<string>(''); // Inicializado com uma string vazia
  pageName$ = this.pageNameSubject.asObservable();

  setPageName(pageName: string) {
    this.pageNameSubject.next(pageName);
  }
}

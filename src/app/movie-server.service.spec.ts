import { TestBed } from '@angular/core/testing';

import { MovieServerService } from './movie-server.service';

describe('MovieServerService', () => {
  let service: MovieServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

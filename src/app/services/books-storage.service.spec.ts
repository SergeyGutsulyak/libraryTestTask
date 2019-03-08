import { TestBed } from '@angular/core/testing';

import { BooksStorageService } from './books-storage.service';

describe('BooksStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksStorageService = TestBed.get(BooksStorageService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CardVerificationLibraryService } from './card-verification-library.service';

describe('CardVerificationLibraryService', () => {
  let service: CardVerificationLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardVerificationLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

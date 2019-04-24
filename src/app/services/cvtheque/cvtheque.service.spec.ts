import { TestBed } from '@angular/core/testing';

import { CvthequeService } from './cvtheque.service';

describe('CvthequeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvthequeService = TestBed.get(CvthequeService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SearchCharacterService } from './search-character.service';

describe('SearchCharacterService', () => {
  let service: SearchCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NpcDataService } from './npc-data.service';

describe('NpcDataService', () => {
  let service: NpcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

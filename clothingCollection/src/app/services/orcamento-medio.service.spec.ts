import { TestBed } from '@angular/core/testing';

import { OrcamentoMedioService } from './orcamento-medio.service';

describe('OrcamentoMedioService', () => {
  let service: OrcamentoMedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrcamentoMedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

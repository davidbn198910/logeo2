import { TestBed } from '@angular/core/testing';

import { EBillQueryServicesService } from './e-bill-query-services.service';

describe('EBillQueryServicesService', () => {
  let service: EBillQueryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EBillQueryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CompanyMasterService } from './company-master.service';

describe('CompanyMasterService', () => {
  let service: CompanyMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyMasterService],
    }).compile();

    service = module.get<CompanyMasterService>(CompanyMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

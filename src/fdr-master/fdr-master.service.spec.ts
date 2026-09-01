import { Test, TestingModule } from '@nestjs/testing';
import { FdrMasterService } from './fdr-master.service';

describe('FdrMasterService', () => {
  let service: FdrMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FdrMasterService],
    }).compile();

    service = module.get<FdrMasterService>(FdrMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

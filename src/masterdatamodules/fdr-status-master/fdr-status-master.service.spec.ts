import { Test, TestingModule } from '@nestjs/testing';
import { FdrStatusMasterService } from './fdr-status-master.service';

describe('FdrStatusMasterService', () => {
  let service: FdrStatusMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FdrStatusMasterService],
    }).compile();

    service = module.get<FdrStatusMasterService>(FdrStatusMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

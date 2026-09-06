import { Test, TestingModule } from '@nestjs/testing';
import { FundMasterService } from './fund-master.service';

describe('FundMasterService', () => {
  let service: FundMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundMasterService],
    }).compile();

    service = module.get<FundMasterService>(FundMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

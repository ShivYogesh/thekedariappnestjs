import { Test, TestingModule } from '@nestjs/testing';
import { TenderGroupMasterService } from './tender-group-master.service';

describe('TenderGroupMasterService', () => {
  let service: TenderGroupMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenderGroupMasterService],
    }).compile();

    service = module.get<TenderGroupMasterService>(TenderGroupMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

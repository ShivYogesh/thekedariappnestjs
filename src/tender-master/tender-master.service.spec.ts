import { Test, TestingModule } from '@nestjs/testing';
import { TenderMasterService } from './tender-master.service';

describe('TenderMasterService', () => {
  let service: TenderMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenderMasterService],
    }).compile();

    service = module.get<TenderMasterService>(TenderMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TenderSecurityService } from './tender-security.service';

describe('TenderSecurityService', () => {
  let service: TenderSecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenderSecurityService],
    }).compile();

    service = module.get<TenderSecurityService>(TenderSecurityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

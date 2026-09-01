import { Test, TestingModule } from '@nestjs/testing';
import { CompanyMasterController } from './company-master.controller';
import { CompanyMasterService } from './company-master.service';

describe('CompanyMasterController', () => {
  let controller: CompanyMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyMasterController],
      providers: [CompanyMasterService],
    }).compile();

    controller = module.get<CompanyMasterController>(CompanyMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

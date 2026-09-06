import { Test, TestingModule } from '@nestjs/testing';
import { FundMasterController } from './fund-master.controller';
import { FundMasterService } from './fund-master.service';

describe('FundMasterController', () => {
  let controller: FundMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundMasterController],
      providers: [FundMasterService],
    }).compile();

    controller = module.get<FundMasterController>(FundMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

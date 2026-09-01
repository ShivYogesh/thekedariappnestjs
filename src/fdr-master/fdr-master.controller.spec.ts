import { Test, TestingModule } from '@nestjs/testing';
import { FdrMasterController } from './fdr-master.controller';
import { FdrMasterService } from './fdr-master.service';

describe('FdrMasterController', () => {
  let controller: FdrMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FdrMasterController],
      providers: [FdrMasterService],
    }).compile();

    controller = module.get<FdrMasterController>(FdrMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FdrStatusMasterController } from './fdr-status-master.controller';
import { FdrStatusMasterService } from './fdr-status-master.service';

describe('FdrStatusMasterController', () => {
  let controller: FdrStatusMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FdrStatusMasterController],
      providers: [FdrStatusMasterService],
    }).compile();

    controller = module.get<FdrStatusMasterController>(FdrStatusMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

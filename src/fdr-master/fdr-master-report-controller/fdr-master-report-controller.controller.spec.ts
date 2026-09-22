import { Test, TestingModule } from '@nestjs/testing';
import { FdrMasterReportControllerController } from './fdr-master-report-controller.controller';

describe('FdrMasterReportControllerController', () => {
  let controller: FdrMasterReportControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FdrMasterReportControllerController],
    }).compile();

    controller = module.get<FdrMasterReportControllerController>(FdrMasterReportControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

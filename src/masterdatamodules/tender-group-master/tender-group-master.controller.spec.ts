import { Test, TestingModule } from '@nestjs/testing';
import { TenderGroupMasterController } from './tender-group-master.controller';
import { TenderGroupMasterService } from './tender-group-master.service';

describe('TenderGroupMasterController', () => {
  let controller: TenderGroupMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenderGroupMasterController],
      providers: [TenderGroupMasterService],
    }).compile();

    controller = module.get<TenderGroupMasterController>(TenderGroupMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

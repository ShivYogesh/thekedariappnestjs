import { Test, TestingModule } from '@nestjs/testing';
import { TenderMasterController } from './tender-master.controller';
import { TenderMasterService } from './tender-master.service';

describe('TenderMasterController', () => {
  let controller: TenderMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenderMasterController],
      providers: [TenderMasterService],
    }).compile();

    controller = module.get<TenderMasterController>(TenderMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

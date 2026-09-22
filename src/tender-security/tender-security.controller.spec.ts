import { Test, TestingModule } from '@nestjs/testing';
import { TenderSecurityController } from './tender-security.controller';
import { TenderSecurityService } from './tender-security.service';

describe('TenderSecurityController', () => {
  let controller: TenderSecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenderSecurityController],
      providers: [TenderSecurityService],
    }).compile();

    controller = module.get<TenderSecurityController>(TenderSecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

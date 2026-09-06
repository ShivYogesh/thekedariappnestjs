import { Module } from '@nestjs/common';
import { FundMasterService } from './fund-master.service';
import { FundMasterController } from './fund-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundMaster } from './entities/fund-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FundMaster])],
  controllers: [FundMasterController],
  providers: [FundMasterService],
  exports:[FundMasterService],
})
export class FundMasterModule {}

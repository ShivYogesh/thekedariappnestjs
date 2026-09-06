import { Module } from '@nestjs/common';
import { TenderGroupMasterService } from './tender-group-master.service';
import { TenderGroupMasterController } from './tender-group-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenderGroupMaster } from './entities/tender-group-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenderGroupMaster])],
  controllers: [TenderGroupMasterController],
  providers: [TenderGroupMasterService],
  exports:[TenderGroupMasterService],
})
export class TenderGroupMasterModule {}

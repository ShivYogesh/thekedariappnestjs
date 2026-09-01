import { Module } from '@nestjs/common';
import { TenderMasterService } from './tender-master.service';
import { TenderMasterController } from './tender-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenderMaster } from './entities/tender-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenderMaster])],
  controllers: [TenderMasterController],
  providers: [TenderMasterService],
  exports:[TenderMasterService],

})
export class TenderMasterModule {}

import { Module } from '@nestjs/common';
import { PledgeNameMasterService } from './pledge-name-master.service';
import { PledgeNameMasterController } from './pledge-name-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PledgeNameMaster } from './entities/pledge-name-master.entity';

@Module({
   imports: [TypeOrmModule.forFeature([PledgeNameMaster])],
  controllers: [PledgeNameMasterController],
  providers: [PledgeNameMasterService],
  exports:[PledgeNameMasterService],
})
export class PledgeNameMasterModule {}

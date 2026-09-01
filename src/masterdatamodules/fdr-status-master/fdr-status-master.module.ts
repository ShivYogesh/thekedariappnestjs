import { Module } from '@nestjs/common';
import { FdrStatusMasterService } from './fdr-status-master.service';
import { FdrStatusMasterController } from './fdr-status-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FdrStatusMaster } from './entities/fdr-status-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FdrStatusMaster])],
  controllers: [FdrStatusMasterController],
  providers: [FdrStatusMasterService],
  exports: [FdrStatusMasterService], // 👈 Make BankMasterService available to other modules
})
export class FdrStatusMasterModule {}

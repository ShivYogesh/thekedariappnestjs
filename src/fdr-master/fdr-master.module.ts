import { Module } from '@nestjs/common';
import { FdrMasterService } from './fdr-master.service';
import { FdrMasterController } from './fdr-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FdrMaster } from './entities/fdr-master.entity';
import { BankMaster } from 'src/masterdatamodules/bank-master/entities/bank-master.entity';
import { PledgeNameMaster } from 'src/masterdatamodules/pledge-name-master/entities/pledge-name-master.entity';
import { CompanyMaster } from 'src/masterdatamodules/company-master/entities/company-master.entity';
import { FdrStatusMaster } from 'src/masterdatamodules/fdr-status-master/entities/fdr-status-master.entity';
import { FdrMasterReportControllerController } from './fdr-master-report-controller/fdr-master-report-controller.controller';

@Module({
  imports:[TypeOrmModule.forFeature([
    FdrMaster,
    BankMaster,
    PledgeNameMaster,
    CompanyMaster,
    FdrStatusMaster,
    
  ])],
  controllers: [FdrMasterController, FdrMasterReportControllerController],
  providers: [FdrMasterService],
  exports:[FdrMasterService],
})
export class FdrMasterModule {}

import { Module } from '@nestjs/common';
import { CompanyMasterService } from './company-master.service';
import { CompanyMasterController } from './company-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyMaster } from './entities/company-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CompanyMaster])],
  controllers: [CompanyMasterController],
  providers: [CompanyMasterService],
  exports:[CompanyMasterService],
})
export class CompanyMasterModule {}

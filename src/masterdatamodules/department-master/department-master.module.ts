import { Module } from '@nestjs/common';
import { DepartmentMasterService } from './department-master.service';
import { DepartmentMasterController } from './department-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentMaster } from './entities/department-master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepartmentMaster])],
  controllers: [DepartmentMasterController],
  providers: [DepartmentMasterService],
  exports:[DepartmentMasterService],
})
export class DepartmentMasterModule {}

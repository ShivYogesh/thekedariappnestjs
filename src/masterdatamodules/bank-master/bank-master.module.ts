import { Module } from '@nestjs/common';
import { BankMasterService } from './bank-master.service';
import { BankMasterController } from './bank-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankMaster } from './entities/bank-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankMaster])],
  controllers: [BankMasterController],
  providers: [BankMasterService],
  exports: [BankMasterService], // 👈 Make BankMasterService available to other modules
})
export class BankMasterModule {
}//export class BankMasterModule

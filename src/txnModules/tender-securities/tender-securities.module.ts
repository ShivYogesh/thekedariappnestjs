import { Module } from '@nestjs/common';
import { TenderSecuritiesService } from './tender-securities.service';
import { TenderSecuritiesController } from './tender-securities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenderSecurities } from './entities/tender-securities.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenderSecurities])],
  controllers: [TenderSecuritiesController],
  providers: [TenderSecuritiesService],
  exports:[TenderSecuritiesModule],
})
export class TenderSecuritiesModule {}

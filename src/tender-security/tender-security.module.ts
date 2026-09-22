import { Module } from '@nestjs/common';
import { TenderSecurityService } from './tender-security.service';
import { TenderSecurityController } from './tender-security.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenderSecurity } from './entities/tender-security.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TenderSecurity])],
  controllers: [TenderSecurityController],
  providers: [TenderSecurityService],
  exports:[TenderSecurityService],
})
export class TenderSecurityModule {}

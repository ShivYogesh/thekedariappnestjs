import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TenderMasterModule } from './tender-master/tender-master.module';
import { FdrMasterModule } from './fdr-master/fdr-master.module';
import { BankMasterModule } from './masterdatamodules/bank-master/bank-master.module';
import { FdrStatusMasterModule } from './masterdatamodules/fdr-status-master/fdr-status-master.module';
import { PledgeNameMasterModule } from './masterdatamodules/pledge-name-master/pledge-name-master.module';
import { CompanyMasterModule } from './masterdatamodules/company-master/company-master.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available everywhere
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      url:process.env.DATABASE_URL,
      autoLoadEntities:true,
      synchronize:true
    }),
    UsersModule,
    AuthModule,
    TenderMasterModule,
    FdrMasterModule,
    FdrStatusMasterModule,
    BankMasterModule,
    PledgeNameMasterModule,
    CompanyMasterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

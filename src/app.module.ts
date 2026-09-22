import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { DepartmentMasterModule } from './masterdatamodules/department-master/department-master.module';
import { FundMasterModule } from './masterdatamodules/fund-master/fund-master.module';
import { TenderGroupMasterModule } from './masterdatamodules/tender-group-master/tender-group-master.module';
import { TenderSecurityModule } from './tender-security/tender-security.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { TenderSecuritiesModule } from './txnModules/tender-securities/tender-securities.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({     // this is rate Limit
      throttlers:[
        {
        ttl:6000,
        limit:2,
      },
    ]
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available everywhere
    }),
    TypeOrmModule.forRoot({     //ORM Tool
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
    DepartmentMasterModule,
    FundMasterModule,
    TenderGroupMasterModule,
    TenderSecurityModule,
    TenderSecurityModule,
    TenderSecuritiesModule,
  ],//end emports
  controllers: [AppController],
  providers: [AppService,{provide:APP_GUARD,useClass:ThrottlerGuard}],
})
export class AppModule {}

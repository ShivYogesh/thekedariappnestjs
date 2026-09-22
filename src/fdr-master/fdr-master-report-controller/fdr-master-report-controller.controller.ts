import { Controller, Get } from '@nestjs/common';
import { FdrMasterService } from '../fdr-master.service';

@Controller('fdr-report')
export class FdrMasterReportControllerController {
     constructor(private readonly fdrMasterService: FdrMasterService) {}
    @Get('pledgewisereport')
      async getPledgeWiseReport(){
        return await this.fdrMasterService.getPledgeWiseReport();
      }//getBankWiseReport()
}

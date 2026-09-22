import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FdrMasterService } from './fdr-master.service';
import { CreateFdrMasterDto } from './dto/create-fdr-master.dto';
import { UpdateFdrMasterDto } from './dto/update-fdr-master.dto';

@Controller('fdr-master')
export class FdrMasterController {
  constructor(private readonly fdrMasterService: FdrMasterService) {}

  @Post()
  async create(@Body() createFdrMasterDto: CreateFdrMasterDto) {
    console.log("FDR Creation Hit");   
    console.log(createFdrMasterDto);
    return await this.fdrMasterService.create(createFdrMasterDto);
   
  }

  @Get()
  findAll() {
    return this.fdrMasterService.findAll();
  }
@Get('bankwisereport')
  async getBankWiseReport(){
    return await this.fdrMasterService.getBankWiseReport();
  }//getBankWiseReport()


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fdrMasterService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFdrMasterDto: UpdateFdrMasterDto) {
    return this.fdrMasterService.update(+id, updateFdrMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id);
    console.log(+id);
    return this.fdrMasterService.remove(+id);
  }
}

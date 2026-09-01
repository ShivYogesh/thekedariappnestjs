import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FdrStatusMasterService } from './fdr-status-master.service';
import { CreateFdrStatusMasterDto } from './dto/create-fdr-status-master.dto';
import { UpdateFdrStatusMasterDto } from './dto/update-fdr-status-master.dto';

@Controller('fdr-status-master')
export class FdrStatusMasterController {
  constructor(private readonly fdrStatusMasterService: FdrStatusMasterService) {}

  @Post()
  create(@Body() createFdrStatusMasterDto: CreateFdrStatusMasterDto) {
    return this.fdrStatusMasterService.create(createFdrStatusMasterDto);
  }

  @Get()
  findAll() {
    return this.fdrStatusMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fdrStatusMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFdrStatusMasterDto: UpdateFdrStatusMasterDto) {
    return this.fdrStatusMasterService.update(+id, updateFdrStatusMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fdrStatusMasterService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenderMasterService } from './tender-master.service';
import { CreateTenderMasterDto } from './dto/create-tender-master.dto';
import { UpdateTenderMasterDto } from './dto/update-tender-master.dto';

@Controller('tender-master')
export class TenderMasterController {
  constructor(private readonly tenderMasterService: TenderMasterService) {}

  @Post()
  create(@Body() createTenderMasterDto: CreateTenderMasterDto) {
    return this.tenderMasterService.create(createTenderMasterDto);
  }

  @Get()
  findAll() {
    return this.tenderMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenderMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenderMasterDto: UpdateTenderMasterDto) {
    return this.tenderMasterService.update(+id, updateTenderMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenderMasterService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenderGroupMasterService } from './tender-group-master.service';
import { CreateTenderGroupMasterDto } from './dto/create-tender-group-master.dto';
import { UpdateTenderGroupMasterDto } from './dto/update-tender-group-master.dto';

@Controller('tender-group-master')
export class TenderGroupMasterController {
  constructor(private readonly tenderGroupMasterService: TenderGroupMasterService) {}

  @Post()
 async create(@Body() createTenderGroupMasterDto: CreateTenderGroupMasterDto) {
    return this.tenderGroupMasterService.create(createTenderGroupMasterDto);
  }

  @Get()
  async findAll() {
    return this.tenderGroupMasterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tenderGroupMasterService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTenderGroupMasterDto: UpdateTenderGroupMasterDto) {
    return this.tenderGroupMasterService.update(+id, updateTenderGroupMasterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tenderGroupMasterService.remove(+id);
  }
}

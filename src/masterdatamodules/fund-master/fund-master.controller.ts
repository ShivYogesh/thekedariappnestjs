import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FundMasterService } from './fund-master.service';
import { CreateFundMasterDto } from './dto/create-fund-master.dto';
import { UpdateFundMasterDto } from './dto/update-fund-master.dto';

@Controller('fund-master')
export class FundMasterController {
  constructor(private readonly fundMasterService: FundMasterService) {}

  @Post()
  create(@Body() createFundMasterDto: CreateFundMasterDto) {
    return this.fundMasterService.create(createFundMasterDto);
  }

  @Get()
  findAll() {
    return this.fundMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundMasterDto: UpdateFundMasterDto) {
    return this.fundMasterService.update(+id, updateFundMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundMasterService.remove(+id);
  }
}

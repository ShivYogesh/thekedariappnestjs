import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankMasterService } from './bank-master.service';
import { CreateBankMasterDto } from './dto/create-bank-master.dto';
import { UpdateBankMasterDto } from './dto/update-bank-master.dto';

@Controller('bank-master')
export class BankMasterController {
  constructor(private readonly bankMasterService: BankMasterService) {}

  @Post()
  create(@Body() createBankMasterDto: CreateBankMasterDto) {
    return this.bankMasterService.create(createBankMasterDto);
  }

  @Get()
  findAll() {
   
    return this.bankMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('name') name: string) {
    return this.bankMasterService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankMasterDto: UpdateBankMasterDto) {
    return this.bankMasterService.update(+id, updateBankMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankMasterService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyMasterService } from './company-master.service';
import { CreateCompanyMasterDto } from './dto/create-company-master.dto';
import { UpdateCompanyMasterDto } from './dto/update-company-master.dto';

@Controller('company-master')
export class CompanyMasterController {
  constructor(private readonly companyMasterService: CompanyMasterService) {}

  @Post()
 async create(@Body() createCompanyMasterDto: CreateCompanyMasterDto) {
    return await this.companyMasterService.create(createCompanyMasterDto);
  }

  @Get()
  async findAll() {
    return await this.companyMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyMasterDto: UpdateCompanyMasterDto) {
    return this.companyMasterService.update(+id, updateCompanyMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyMasterService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenderSecuritiesService } from './tender-securities.service';
import { CreateTenderSecurityDto } from './dto/create-tender-security.dto';
import { UpdateTenderSecurityDto } from './dto/update-tender-security.dto';

@Controller('tender-securities')
export class TenderSecuritiesController {
  constructor(private readonly tenderSecuritiesService: TenderSecuritiesService) {}

  @Post()
  create(@Body() createTenderSecurityDto: CreateTenderSecurityDto) {
    return this.tenderSecuritiesService.create(createTenderSecurityDto);
  }

  @Get()
  findAll() {
    return this.tenderSecuritiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenderSecuritiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenderSecurityDto: UpdateTenderSecurityDto) {
    return this.tenderSecuritiesService.update(+id, updateTenderSecurityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenderSecuritiesService.remove(+id);
  }
}

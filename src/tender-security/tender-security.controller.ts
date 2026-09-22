import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenderSecurityService } from './tender-security.service';
import { CreateTenderSecurityDto } from './dto/create-tender-security.dto';
import { UpdateTenderSecurityDto } from './dto/update-tender-security.dto';

@Controller('tender-security')
export class TenderSecurityController {
  constructor(private readonly tenderSecurityService: TenderSecurityService) {}

  @Post()
  create(@Body() createTenderSecurityDto: CreateTenderSecurityDto) {
    return this.tenderSecurityService.create(createTenderSecurityDto);
  }

  @Get()
  findAll() {
    return this.tenderSecurityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenderSecurityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenderSecurityDto: UpdateTenderSecurityDto) {
    return this.tenderSecurityService.update(+id, updateTenderSecurityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenderSecurityService.remove(+id);
  }
}

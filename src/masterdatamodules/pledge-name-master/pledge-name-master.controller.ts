import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PledgeNameMasterService } from './pledge-name-master.service';
import { CreatePledgeNameMasterDto } from './dto/create-pledge-name-master.dto';
import { UpdatePledgeNameMasterDto } from './dto/update-pledge-name-master.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard) // 👈 This route now requires a valid Bearer token
@Controller('pledge-name-master')
export class PledgeNameMasterController {
  constructor(private readonly pledgeNameMasterService: PledgeNameMasterService) {}

  @Post()
  create(@Body() createPledgeNameMasterDto: CreatePledgeNameMasterDto) {
    return this.pledgeNameMasterService.create(createPledgeNameMasterDto);
  }

  @Get()
  findAll() {
    return this.pledgeNameMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pledgeNameMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePledgeNameMasterDto: UpdatePledgeNameMasterDto) {
    return this.pledgeNameMasterService.update(+id, updatePledgeNameMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pledgeNameMasterService.remove(+id);
  }
}

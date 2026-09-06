import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentMasterService } from './department-master.service';
import { CreateDepartmentMasterDto } from './dto/create-department-master.dto';
import { UpdateDepartmentMasterDto } from './dto/update-department-master.dto';
import { DepartmentMaster } from './entities/department-master.entity';

@Controller('department-master')
export class DepartmentMasterController {
  constructor(private readonly departmentMasterService: DepartmentMasterService) {}

  @Post()
 async create(@Body() createDepartmentMasterDto: CreateDepartmentMasterDto):Promise<DepartmentMaster> {
  try {
    return await this.departmentMasterService.create(createDepartmentMasterDto);  
  } catch (error) {
    throw error;
  }
  
  }

  @Get()
 async findAll() {
  try {
    return await this.departmentMasterService.findAll();  
  } catch (error) {
    throw error;
    
  }  
  
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentMasterDto: UpdateDepartmentMasterDto) {
    return this.departmentMasterService.update(+id, updateDepartmentMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
    return this.departmentMasterService.remove(+id);  
    } catch (error) {
      throw error;
    }
    
  }
}

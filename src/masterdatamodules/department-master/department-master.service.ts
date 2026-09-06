import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentMasterDto } from './dto/create-department-master.dto';
import { UpdateDepartmentMasterDto } from './dto/update-department-master.dto';
import { DepartmentMaster } from './entities/department-master.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentMasterService {
  constructor(
    @InjectRepository(DepartmentMaster)
       private departmentMasterRepository: Repository<DepartmentMaster>){}//constructor()
 async create(createDepartmentMasterDto: CreateDepartmentMasterDto):Promise< DepartmentMaster> {
    try {
          return await this.departmentMasterRepository.save(createDepartmentMasterDto);    
    } catch (error) {
      throw error;
    }
  
  
 
  }

 async findAll() {
  try {
    return await this.departmentMasterRepository.find();  
  } catch (error) {
    throw error;
  }  
  
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentMaster`;
  }

  update(id: number, updateDepartmentMasterDto: UpdateDepartmentMasterDto) {
    return `This action updates a #${id} departmentMaster`;
  }

  async remove(id: number) {
    const result = await this.departmentMasterRepository.softDelete(id);
          // If affected rows is 0, the ID was never there
          if (result.affected === 0) {
            throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
          }
          // Return a success message or object confirming deletion
          return { message: `Record with ID ${id} successfully deleted` };
  }
}

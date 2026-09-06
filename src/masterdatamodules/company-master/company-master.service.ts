import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyMasterDto } from './dto/create-company-master.dto';
import { UpdateCompanyMasterDto } from './dto/update-company-master.dto';
import { CompanyMaster } from './entities/company-master.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchCompanyMasterDto } from './dto/search-company-master.dto';

@Injectable()
export class CompanyMasterService {
  constructor(@InjectRepository(CompanyMaster)
     private companyMasterRepository: Repository<CompanyMaster>) { }//constructor()
   
  async create(createCompanyMasterDto: CreateCompanyMasterDto):Promise<CompanyMaster> {
    try {
      return await this.companyMasterRepository.save(createCompanyMasterDto);
    } catch (error) {
      throw error;
    }
  }//create()

 async findAll(query: SearchCompanyMasterDto):Promise<CompanyMaster[]> {
    
  return await this.companyMasterRepository.find({relations:{fdrs:query.includeFdrs}});
  }

  findOne(id: number) {
    return `This action returns a #${id} companyMaster`;
  }

  update(id: number, updateCompanyMasterDto: UpdateCompanyMasterDto) {
    return `This action updates a #${id} companyMaster`;
  }

  async remove(id: number) {
      const result = await this.companyMasterRepository.softDelete(id);
      // If affected rows is 0, the ID was never there
      if (result.affected === 0) {
        throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
      }
      // Return a success message or object confirming deletion
      return { message: `Record with ID ${id} successfully deleted` };
    }//remove()
}

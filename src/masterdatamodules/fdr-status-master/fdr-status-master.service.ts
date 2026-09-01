import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFdrStatusMasterDto } from './dto/create-fdr-status-master.dto';
import { UpdateFdrStatusMasterDto } from './dto/update-fdr-status-master.dto';
import { FdrStatusMaster } from './entities/fdr-status-master.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FdrStatusMasterService {
  constructor(@InjectRepository(FdrStatusMaster)
     private fdrStatusRepository: Repository<FdrStatusMaster>) { }//constructor()
   
  async create(createFdrStatusMasterDto: CreateFdrStatusMasterDto):Promise<FdrStatusMaster> {
    try {
      return await this.fdrStatusRepository.save(createFdrStatusMasterDto);
    } catch (error) {
      throw error;
    }
  }//creat()
  async findAll(): Promise<FdrStatusMaster[]> {
        return await this.fdrStatusRepository.find({relations:{fdrs:true}});
      }//findAll()

  findOne(id: number) {
    return `This action returns a #${id} fdrStatusMaster`;
  }

  update(id: number, updateFdrStatusMasterDto: UpdateFdrStatusMasterDto) {
    return `This action updates a #${id} fdrStatusMaster`;
  }

  async remove(id: string):Promise<string> {
      const result = await this.fdrStatusRepository.softDelete(id);
          // If affected rows is 0, the ID was never there
          if (result.affected === 0) {
            throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
          }
          // Return a success message or object confirming deletion
          return  `Record with ID ${id} successfully deleted`;
    }//remove()
}

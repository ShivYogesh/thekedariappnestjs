import { Injectable } from '@nestjs/common';
import { CreateFdrMasterDto } from './dto/create-fdr-master.dto';
import { UpdateFdrMasterDto } from './dto/update-fdr-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FdrMaster } from './entities/fdr-master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FdrMasterService {
  constructor(
    @InjectRepository(FdrMaster)
      private fdrMasterRepository: Repository<FdrMaster>

  ){}//constructor()
 async create(createFdrMasterDto: CreateFdrMasterDto):Promise<FdrMaster> {
    try {
      // 1. Instantiate the entity mapping the DTO data
      const newFdrMaster = await this.fdrMasterRepository.create(createFdrMasterDto);
    // 2. Persist the instantiated entity to the database
    const savedFdrMaster = await this.fdrMasterRepository.save(newFdrMaster);
    return   savedFdrMaster;
    //return await this.fdrMasterRepository.save(createFdrMasterDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.fdrMasterRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fdrMaster`;
  }

  update(id: number, updateFdrMasterDto: UpdateFdrMasterDto) {
    return `This action updates a #${id} fdrMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} fdrMaster`;
  }
}

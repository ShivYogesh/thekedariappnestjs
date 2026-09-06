import { Injectable } from '@nestjs/common';
import { CreateTenderMasterDto } from './dto/create-tender-master.dto';
import { UpdateTenderMasterDto } from './dto/update-tender-master.dto';
import { TenderMaster } from './entities/tender-master.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TenderMasterService {
 constructor(
   @InjectRepository(TenderMaster)
        private tenderMasterRepository: Repository<TenderMaster>
 ){}//counstructor
  async create(createTenderMasterDto: CreateTenderMasterDto) {
    try {
      // 1. Instantiate the entity mapping the DTO data
      const newRecord = await this.tenderMasterRepository.create(createTenderMasterDto);
    // 2. Persist the instantiated entity to the database
    const savedRecord = await this.tenderMasterRepository.save(newRecord);
    return   savedRecord;
    //return await this.fdrMasterRepository.save(createFdrMasterDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
     return this.tenderMasterRepository.find();
  } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} tenderMaster`;
  }

  update(id: number, updateTenderMasterDto: UpdateTenderMasterDto) {
    return `This action updates a #${id} tenderMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenderMaster`;
  }
}

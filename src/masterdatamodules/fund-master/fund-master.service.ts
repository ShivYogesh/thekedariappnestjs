import { Injectable } from '@nestjs/common';
import { CreateFundMasterDto } from './dto/create-fund-master.dto';
import { UpdateFundMasterDto } from './dto/update-fund-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenderMaster } from 'src/tender-master/entities/tender-master.entity';
import { Repository } from 'typeorm';
import { FundMaster } from './entities/fund-master.entity';

@Injectable()
export class FundMasterService {
  constructor(@InjectRepository(FundMaster)private tenderMasterRepository:Repository<TenderMaster>){}//constructor()
 
  async create(createFundMasterDto: CreateFundMasterDto) {
    return await  this.tenderMasterRepository.save(createFundMasterDto);
  }

 async findAll() {
    return await this.tenderMasterRepository.find();
  }

  async findOne(id: number) {
    return await this.tenderMasterRepository.findOneBy({id:id});
  }

  update(id: number, updateFundMasterDto: UpdateFundMasterDto) {
    return `This action updates a #${id} fundMaster`;
  }

  remove(id: number) {
    return this.tenderMasterRepository.softDelete(id);
  }
}

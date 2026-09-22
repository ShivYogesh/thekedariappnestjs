import { Injectable } from '@nestjs/common';
import { CreateTenderSecurityDto } from './dto/create-tender-security.dto';
import { UpdateTenderSecurityDto } from './dto/update-tender-security.dto';
import { TenderSecurities } from './entities/tender-securities.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TenderSecuritiesService {
   constructor(
      @InjectRepository(TenderSecurities)
        private tenderSecurtyRepository: Repository<TenderSecurities>
  
    ){}//constructor()
  async create(createTenderSecurityDto: CreateTenderSecurityDto) {
     try {
      // 1. Instantiate the entity mapping the DTO data
      const newDataOBJ = await this.tenderSecurtyRepository.create(createTenderSecurityDto);
    // 2. Persist the instantiated entity to the database
    const savedDataOBJ = await this.tenderSecurtyRepository.save(newDataOBJ);
    return   savedDataOBJ;
    //return await this.fdrMasterRepository.save(createFdrMasterDto);
    } catch (error) {
      throw error;
    }
    
  }

 async findAll() {
    return await this.tenderSecurtyRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tenderSecurity`;
  }

  update(id: number, updateTenderSecurityDto: UpdateTenderSecurityDto) {
    return `This action updates a #${id} tenderSecurity`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenderSecurity`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTenderSecurityDto } from './dto/create-tender-security.dto';
import { UpdateTenderSecurityDto } from './dto/update-tender-security.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenderSecurity } from './entities/tender-security.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenderSecurityService {
  constructor(
    @InjectRepository(TenderSecurity)
    private tenderSecurityRepo:
    Repository<TenderSecurity>){}//constructor()
  create(createTenderSecurityDto: CreateTenderSecurityDto) {
    try {
       return this.tenderSecurityRepo.save(createTenderSecurityDto);
    } catch (error) {
      
      throw error;
    }
   
  }

  findAll() {
    return this.tenderSecurityRepo.find();
  }

  findOne(id: number) {
    return this.tenderSecurityRepo.find();
  }

  update(id: number, updateTenderSecurityDto: UpdateTenderSecurityDto) {
    return `This action updates a #${id} tenderSecurity`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenderSecurity`;
  }
}

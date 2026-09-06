import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankMasterDto } from './dto/create-bank-master.dto';
import { UpdateBankMasterDto } from './dto/update-bank-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BankMaster } from './entities/bank-master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankMasterService {
 constructor(@InjectRepository(BankMaster)
   private bankRepository: Repository<BankMaster>) { }//constructor()
   // create function with DTO
   async create(createBankMasterDto: CreateBankMasterDto): Promise<BankMaster> {
    try {
      return await this.bankRepository.save(createBankMasterDto);
    } catch (error) {
      throw error;
    }
  }//create()
  async findAll(): Promise<BankMaster[]> {
      return await this.bankRepository.find({relations:{fdrs:true}});
    }//findAll()
  async findOne(name: string) {
    return await this.bankRepository.findOneBy({bankName:name});
  }

  update(id: number, updateBankMasterDto: UpdateBankMasterDto) {
    return `This action updates a #${id} bankMaster`;
  }

  async remove(id: string):Promise<string> {
    const result = await this.bankRepository.softDelete(id);
        // If affected rows is 0, the ID was never there
        if (result.affected === 0) {
          throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
        }
        // Return a success message or object confirming deletion
        return  `Record with ID ${id} successfully deleted`;
  }//remove()
}

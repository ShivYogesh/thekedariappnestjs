import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePledgeNameMasterDto } from './dto/create-pledge-name-master.dto';
import { UpdatePledgeNameMasterDto } from './dto/update-pledge-name-master.dto';
import { PledgeNameMaster } from './entities/pledge-name-master.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PledgeNameMasterService {
  constructor(
    @InjectRepository(PledgeNameMaster)
         private pledgeNameMasterRepository: Repository<PledgeNameMaster>

  ){}//constructor()
  async create(createPledgeNameMasterDto: CreatePledgeNameMasterDto):Promise<PledgeNameMaster> {
    try {
      return await this.pledgeNameMasterRepository.save(createPledgeNameMasterDto);
    } catch (error) {
      throw error;
    }
  }//create()

  async findAll():Promise<PledgeNameMaster[]> {
    return await this.pledgeNameMasterRepository.find({relations:{fdrs:false}});
  }

  findOne(id: number) {
    return `This action returns a #${id} pledgeNameMaster`;
  }

  update(id: number, updatePledgeNameMasterDto: UpdatePledgeNameMasterDto) {
    return `This action updates a #${id} pledgeNameMaster`;
  }

 async remove(id: number) {
    const result = await this.pledgeNameMasterRepository.softDelete(id);
            // If affected rows is 0, the ID was never there
            if (result.affected === 0) {
              throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
            }
            // Return a success message or object confirming deletion
            return  `Record with ID ${id} successfully deleted`;
  }//remove()
}

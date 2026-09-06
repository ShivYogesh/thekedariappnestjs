import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTenderGroupMasterDto } from './dto/create-tender-group-master.dto';
import { UpdateTenderGroupMasterDto } from './dto/update-tender-group-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenderGroupMaster } from './entities/tender-group-master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenderGroupMasterService {
  constructor(
    @InjectRepository(TenderGroupMaster)
    private tenderGroupMasterRepository:
    Repository<TenderGroupMaster>
  ){}//constructor()
  async create(createTenderGroupMasterDto: CreateTenderGroupMasterDto) {
    return await this.tenderGroupMasterRepository.save(createTenderGroupMasterDto);
  }
  async findAll() {
    return await this.tenderGroupMasterRepository.find();
  }
  async findOne(id: number) {
    const result = await this.tenderGroupMasterRepository.findOneBy({ id: id });
        if (!result) {
          throw new NotFoundException(`Record with ID ${id} not found`);
        }
        return result;
    return await this.tenderGroupMasterRepository.findOneBy({id:id});
  }
 async update(id: number, updateTenderGroupMasterDto: UpdateTenderGroupMasterDto) {
    const record=await this.tenderGroupMasterRepository.findOneBy({id:id});
    //this.tenderGroupMasterRepository.update()
    return `This action updates a #${id} tenderGroupMaster`;
  }
  async remove(id: number) {
   const affectedRowCount = await this.tenderGroupMasterRepository.softDelete(id);
    // If affected rows is 0, the ID was never there
    if (affectedRowCount.affected === 0) {
      throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
    }
    // Return a success message or object confirming deletion
    return { message: `Record with ID ${id} successfully deleted` };
  }
}

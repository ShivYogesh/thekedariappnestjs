import { Injectable } from '@nestjs/common';
import { CreateTenderMasterDto } from './dto/create-tender-master.dto';
import { UpdateTenderMasterDto } from './dto/update-tender-master.dto';

@Injectable()
export class TenderMasterService {
  create(createTenderMasterDto: CreateTenderMasterDto) {
    return 'This action adds a new tenderMaster';
  }

  findAll() {
    return `This action returns all tenderMaster`;
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

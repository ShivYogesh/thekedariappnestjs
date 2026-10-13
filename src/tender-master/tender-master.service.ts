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
  ) { }//counstructor
  async create(createTenderMasterDto: CreateTenderMasterDto) {
    try {
      // 1. Map/assign the DTO to a proper entity instance first
      const newRecord = this.tenderMasterRepository.create(createTenderMasterDto);
      // 2. Save the instance
      const savedRecord=await this.tenderMasterRepository.save(newRecord);
      return savedRecord;
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
    return this.tenderMasterRepository.softDelete(id);// `This action removes a #${id} tenderMaster`;
  }//remove()
  async getAllTenders() {
    return await this.tenderMasterRepository.find({
      relations: {
    company: true,
    tenderGroup: true,
    fund: true,
    department: true,
  }, //relations
    });
  }//getAllTenders
async getDepartmentWiseReport() {
    return await this.tenderMasterRepository
      .createQueryBuilder('tender')
      .select('tender.departmentName', 'departmentName')
      .addSelect('COUNT(tender.id)', 'totalTenderCount')
      .addSelect('SUM(tender.depositAmount)', 'totalDepositAmount')
      .groupBy('fdr.bankName')
      .orderBy('totalDepositAmount', 'DESC')
      .getRawMany(); // Use getRawMany() for aggregate queries
  }//getBankWiseReport()
async  getDepartmentSummaryReport() {
  return await this.tenderMasterRepository
    .createQueryBuilder("tender")
    // 1. Join the master entity to get its fields (e.g., name)
    .innerJoin("tender.department", "department")
    // 2. Select metrics and group keys
    .select("tender.departmentId", "departmentId")
    .addSelect("department.name", "departmentName") // Adjust "name" based on DepartmentMaster schema
    .addSelect("COUNT(tender.id)", "totalTenders")
    .addSelect("SUM(tender.amountWithoutGst)", "totalAmountWithoutGst")
    .addSelect("SUM(tender.gstAmount)", "totalGstAmount")
    .addSelect("SUM(tender.totalAmount)", "totalAmount")
    // 3. Group by both selected non-aggregate columns
    .groupBy("tender.departmentId")
    .addGroupBy("department.name")
    // 4. Sort by the highest spending department
    .orderBy("totalAmount", "DESC")
    .getRawMany();
}//getDepartmentSummaryReport()



}

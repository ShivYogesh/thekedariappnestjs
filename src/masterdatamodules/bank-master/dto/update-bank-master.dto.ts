import { PartialType } from '@nestjs/mapped-types';
import { CreateBankMasterDto } from './create-bank-master.dto';

export class UpdateBankMasterDto extends PartialType(CreateBankMasterDto) {}

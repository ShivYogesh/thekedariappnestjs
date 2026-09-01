import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyMasterDto } from './create-company-master.dto';

export class UpdateCompanyMasterDto extends PartialType(CreateCompanyMasterDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentMasterDto } from './create-department-master.dto';

export class UpdateDepartmentMasterDto extends PartialType(CreateDepartmentMasterDto) {}

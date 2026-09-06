import { PartialType } from '@nestjs/mapped-types';
import { CreateTenderGroupMasterDto } from './create-tender-group-master.dto';

export class UpdateTenderGroupMasterDto extends PartialType(CreateTenderGroupMasterDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateTenderMasterDto } from './create-tender-master.dto';

export class UpdateTenderMasterDto extends PartialType(CreateTenderMasterDto) {}

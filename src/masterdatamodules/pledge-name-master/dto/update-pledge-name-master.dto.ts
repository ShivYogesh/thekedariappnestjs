import { PartialType } from '@nestjs/mapped-types';
import { CreatePledgeNameMasterDto } from './create-pledge-name-master.dto';

export class UpdatePledgeNameMasterDto extends PartialType(CreatePledgeNameMasterDto) {}

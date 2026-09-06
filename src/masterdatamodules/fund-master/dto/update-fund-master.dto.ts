import { PartialType } from '@nestjs/mapped-types';
import { CreateFundMasterDto } from './create-fund-master.dto';

export class UpdateFundMasterDto extends PartialType(CreateFundMasterDto) {}

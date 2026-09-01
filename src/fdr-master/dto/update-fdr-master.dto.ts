import { PartialType } from '@nestjs/mapped-types';
import { CreateFdrMasterDto } from './create-fdr-master.dto';

export class UpdateFdrMasterDto extends PartialType(CreateFdrMasterDto) {}

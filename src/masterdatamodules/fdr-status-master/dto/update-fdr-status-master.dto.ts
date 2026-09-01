import { PartialType } from '@nestjs/mapped-types';
import { CreateFdrStatusMasterDto } from './create-fdr-status-master.dto';

export class UpdateFdrStatusMasterDto extends PartialType(CreateFdrStatusMasterDto) {}

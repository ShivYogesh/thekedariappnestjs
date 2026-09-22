import { PartialType } from '@nestjs/mapped-types';
import { CreateTenderSecurityDto } from './create-tender-security.dto';

export class UpdateTenderSecurityDto extends PartialType(CreateTenderSecurityDto) {}

import { Type } from "class-transformer";
import { isBoolean, IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateTenderSecurityDto {

  @IsNumber()
  tenderId!: number;
  @IsString()
  secType!: string;
  @IsNumber()
  fdrId!: number;
  @IsDateString()
  txnDate!: string;
  @IsOptional()
  @IsString()
  remark!: string;
  @IsOptional()
  createdBy?: string;
  @IsOptional()
  updatedBy?: string;

}




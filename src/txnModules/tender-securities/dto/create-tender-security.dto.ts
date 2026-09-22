import { isBoolean, IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, isString, IsString } from "class-validator";

export class CreateTenderSecurityDto {
      @IsDateString()
      txnDate!:Date;
      @IsNumber()
      tenderId!:number;
      @IsNumber()
      fdrId!:number;
      @IsNotEmpty()
      @IsString()
      head!:string;
      @IsNumber()
      fdrAmount!:number;
      @IsString()
      remark!:string;
       @IsOptional()
      createdBy?: string;
      @IsOptional()
      updatedBy?: string;
}


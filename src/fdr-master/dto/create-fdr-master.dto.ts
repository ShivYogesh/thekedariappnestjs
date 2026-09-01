import { isBoolean, IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFdrMasterDto {
    @IsString()
      @IsNotEmpty()
      fdrNo!: string;
      @IsOptional()
      imgUrl!: string;
      @IsDateString()
      depositDate!:Date;
      @IsNumber()
      depositAmount!:number;
      @IsNumber()
      roi!:number;
      @IsNumber()
      termInDays!:number;
      @IsBoolean()
      pledgeStatus!:boolean;
      @IsString()
      bankName!:string;
      @IsString()
      fdrStatus!:string;
      @IsString()
      pledgeName!:string;
      @IsNumber()
      companyId!:number;
      @IsOptional()
      createdBy?: string;
      @IsOptional()
      updatedBy?: string;
}

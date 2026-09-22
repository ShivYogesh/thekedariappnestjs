import { isBoolean, IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateTenderMasterDto {
    @IsString()
    @IsNotEmpty()
    fileNo!: string;
    @IsOptional()
    nameInHindi!: string;
    @IsOptional()
    nameInEnglish!: string;
     @IsNumber()
    amountWithoutGst!: number;
     @IsNumber()
    gstAmount!: number;
     @IsNumber()
    totalAmount!: number;
     @IsNumber()
    companyId!: number;
    @IsNumber()
    @IsOptional()
    groupId!: number;
    @IsNumber()
    fundId!: number;
    @IsNumber()
    departmentId!: number;
    @IsOptional()
    filingMode!:string;
    @IsOptional()
    createdBy?: string;
    @IsOptional()
    updatedBy?: string;

}



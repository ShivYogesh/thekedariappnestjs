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
    tenderGroupId!: number;
    @IsNumber()
    fundId!: number;
    @IsNumber()
    departmentId!: number;
    @IsOptional()
    createdBy?: string;
    @IsOptional()
    updatedBy?: string;

}



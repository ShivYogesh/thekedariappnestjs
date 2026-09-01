import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateBankMasterDto {
    @IsString()
    @IsNotEmpty()
    bankName!: string;
    @IsOptional()
    createdBy?: string;
    @IsOptional()
    updatedBy?: string;
}

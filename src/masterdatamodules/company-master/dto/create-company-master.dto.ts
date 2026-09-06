import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCompanyMasterDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
    @IsString()
    @IsOptional()
    address?: string;
    @IsString()
    @IsOptional()
    gstNo?: string;
    @IsString()
    @IsOptional()
    createdBy?: string;
    @IsString()
    @IsOptional()
    updatedBy?: string;
}

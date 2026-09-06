import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateDepartmentMasterDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
    @IsString()
    @IsNotEmpty()
    address!: string;
    @IsString()
    @IsNotEmpty()
    gstNo!: string;

    @IsOptional()
    createdBy?: string;
    @IsOptional()
    updatedBy?: string;
}


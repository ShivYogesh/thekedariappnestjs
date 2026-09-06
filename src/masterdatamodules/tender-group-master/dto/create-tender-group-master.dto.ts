import { IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateTenderGroupMasterDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
    @IsString()
    @IsOptional()
    createdBy?: string;
    @IsString()
    @IsOptional()
    updatedBy?: string;
}


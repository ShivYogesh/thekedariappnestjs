import {  IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreatePledgeNameMasterDto {
    @IsString()
    @IsNotEmpty()
    pledgeName!: string;
    @IsOptional()
    createdBy?: string;
    @IsOptional()
    updatedBy?: string;
}


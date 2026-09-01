import {  IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateFdrStatusMasterDto {
    @IsString()
    @IsNotEmpty()
    fdrStatusName!: string;
    @IsOptional()
    createdBy?: string;
    @IsOptional()
    updatedBy?: string;
}

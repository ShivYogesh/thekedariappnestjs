import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFundMasterDto {
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

import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

// src/users/dto/create.dto.ts
export class UpdateUserDto {
  @IsString()
     @IsOptional()
      userName!: string ;
      @IsEmail()
       @IsOptional()
    email!: string ;
    @IsString()
     @IsOptional()
    mobileNo!:string;
    @IsString()
     @IsOptional()
    password!:string;
    @IsString()
     @IsOptional()
    role!:string;
    @IsString()
     @IsOptional()
    profileImgPath!:string;
    @IsBoolean()
     @IsOptional()
    isemailAuthenticated!:boolean;
    @IsBoolean()
     @IsOptional()
    isMobileAuthenticated!:boolean;
    @IsBoolean()
     @IsOptional()
    isActive!:boolean;
    @IsOptional()
    createdBy?:string;
    @IsOptional()
    updatedBy?:string;
}
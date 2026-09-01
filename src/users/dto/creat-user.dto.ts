import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

// src/users/dto/create.dto.ts
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userName!: string;
  @IsEmail()
  email!: string;
  @IsString()
  @IsNotEmpty()
  mobileNo!: string;
  @IsString()
  @IsNotEmpty()
  password!: string;
  @IsString()
  @IsNotEmpty()
  role!: string;
  @IsString()
  @IsOptional()
  profileImgPath!: string;
  @IsBoolean()
  @IsNotEmpty()
  isemailAuthenticated!: boolean;
  @IsBoolean()
  @IsNotEmpty()
  isMobileAuthenticated!: boolean;
  @IsBoolean()
  @IsNotEmpty()
  isActive!: boolean;
  @IsOptional()
  createdBy?: string;
  @IsOptional()
  updatedBy?: string;


}
import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SearchCompanyMasterDto {
    // ... your other fields like search, page, limit etc.

  @IsOptional()
  @IsBoolean()
  // 1. This interceptor runs BEFORE the @IsBoolean validation
  // 2. It converts the string "false" or "true" into a real boolean
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  includeFdrs?: boolean;
    

}

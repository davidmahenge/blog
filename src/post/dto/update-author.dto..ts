import { IsOptional, IsString } from 'class-validator';

export class UpdateAuthorDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}

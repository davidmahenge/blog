import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateAuthorDto } from './update-author.dto.';
import { Type } from 'class-transformer';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ValidateNested()
  @Type(() => UpdateAuthorDto)
  author?: UpdateAuthorDto;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  content?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  publishedDate?: string;
}

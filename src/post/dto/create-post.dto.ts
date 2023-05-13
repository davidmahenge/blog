import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateAuthorDto } from './create-author.dto';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateAuthorDto)
  author: CreateAuthorDto;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  publishedDate: string;
}

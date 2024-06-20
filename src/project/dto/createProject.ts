import { IsString, IsBoolean } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  siteUrl: string;

  @IsString()
  githubUrl: string;

  @IsString()
  imageUrl: string;

  @IsString()
  videoUrl: string;

  @IsBoolean()
  highlighted: boolean;
}

import { IsInt, IsString } from 'class-validator';

export class CreateAchievementDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  points: number;
}

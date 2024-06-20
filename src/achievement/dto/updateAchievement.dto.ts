import { PartialType } from '@nestjs/mapped-types';
import { CreateAchievementDto } from './createAchievement.dto';

export class UpdateAchievementDto extends PartialType(CreateAchievementDto) {}

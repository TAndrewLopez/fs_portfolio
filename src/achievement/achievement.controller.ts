import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Achievement as AchievementModel } from '@prisma/client';

import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/createAchievement.dto';
import { UpdateAchievementDto } from './dto/updateAchievement.dto';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  async createOne(
    @Body(ValidationPipe) createAchievementDto: CreateAchievementDto,
  ): Promise<AchievementModel> {
    return this.achievementService.createOne(createAchievementDto);
  }

  @Get()
  async findAll(): Promise<AchievementModel[]> {
    return this.achievementService.findAll();
  }

  @Patch(':id')
  async updateOne(
    @Param('id', ParseIntPipe)
    id: number,
    @Body(ValidationPipe) updateAchievementDto: UpdateAchievementDto,
  ): Promise<AchievementModel> {
    return this.achievementService.updateOne({
      where: { id },
      data: updateAchievementDto,
    });
  }

  @Delete(':id')
  async deleteOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AchievementModel> {
    return this.achievementService.deleteOne({ id });
  }
}

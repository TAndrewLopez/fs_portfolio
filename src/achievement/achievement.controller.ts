import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Achievement as AchievementModel } from '@prisma/client';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Get()
  async findAll(): Promise<AchievementModel[]> {
    return this.achievementService.findAll();
  }

  @Post()
  createOne(
    @Body() createAchievementDto: CreateAchievementDto,
  ): Promise<AchievementModel> {
    return this.achievementService.createOne(createAchievementDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<AchievementModel> {
    return this.achievementService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ): Promise<AchievementModel> {
    return this.achievementService.updateOne({
      where: { id },
      data: { ...updateAchievementDto },
    });
  }

  @Delete(':id')
  deleteAchievement(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<AchievementModel> {
    return this.achievementService.deleteOne({ id });
  }
}

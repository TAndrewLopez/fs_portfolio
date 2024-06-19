import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Get()
  async findAll() {
    return this.achievementService.findAll();
  }

  @Post()
  createOne(@Body() createAchievementDto: CreateAchievementDto) {
    return this.achievementService.createOne(createAchievementDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    return this.achievementService.updateOne(+id, updateAchievementDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.achievementService.deleteOne(+id);
  }
}

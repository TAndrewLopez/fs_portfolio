import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Injectable()
export class AchievementService {
  private readonly achievements: CreateAchievementDto[] = [];

  findAll() {
    return {
      success: true,
      achievements: this.achievements,
    };
  }

  createOne(createAchievementDto: CreateAchievementDto) {
    const newAchievement = {
      id: this.achievements.length + 1,
      ...createAchievementDto,
    };

    this.achievements.push(newAchievement);

    return {
      success: true,
      data: { ...newAchievement },
    };
  }

  findOne(id: number) {
    const achievement = this.achievements.reduce((acc, el) => {
      if (id == el.id) return el;
      return acc;
    }, undefined);

    if (achievement) return achievement;
    return { data: `This action returns id# ${id} achievement` };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateOne(id: number, updateAchievementDto: UpdateAchievementDto) {
    return `This action updates a #${id} achievement`;
  }

  deleteOne(id: number) {
    return `This action removes a #${id} achievement`;
  }
}

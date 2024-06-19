import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@Injectable()
export class AchievementService {
  private achievements: CreateAchievementDto[] = [];

  findAll() {
    return {
      success: true,
      data: this.achievements,
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

    return {
      success: true,
      data: {
        ...achievement,
      },
    };
  }

  updateOne(id: number, updateAchievementDto: UpdateAchievementDto) {
    let [achievement] = this.achievements.filter((ach) => ach.id === id);
    achievement = { ...achievement, ...updateAchievementDto };

    this.achievements = this.achievements.map((item) => {
      return item.id === id ? achievement : item;
    });

    return {
      success: true,
      data: { ...achievement },
    };
  }

  deleteOne(id: number) {
    const achievement = this.achievements.find((item) => item.id === id);
    this.achievements = this.achievements.filter((item) => item.id !== id);
    return {
      success: true,
      data: { ...achievement },
    };
  }
}

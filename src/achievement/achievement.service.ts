import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Achievement, Prisma } from '@prisma/client';

@Injectable()
export class AchievementService {
  constructor(private readonly prisma: DatabaseService) {}

  async findAll(): Promise<Achievement[]> {
    return this.prisma.achievement.findMany();
  }

  async createOne(data: Prisma.AchievementCreateInput): Promise<Achievement> {
    return this.prisma.achievement.create({
      data,
    });
  }

  async findOne(
    where: Prisma.AchievementWhereUniqueInput,
  ): Promise<Achievement> {
    return this.prisma.achievement.findUnique({ where });
  }

  async updateOne(params: {
    where: Prisma.AchievementWhereUniqueInput;
    data: Prisma.AchievementUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.achievement.update({
      data,
      where,
    });
  }

  async deleteOne(where: Prisma.AchievementWhereUniqueInput) {
    return this.prisma.achievement.delete({
      where,
    });
  }
}

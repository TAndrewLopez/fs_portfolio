import { Injectable } from '@nestjs/common';
import { Achievement as AchievementModel, Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Injectable()
export class AchievementService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly prismaErrorService: PrismaErrorService,
  ) {}

  async createOne(
    data: Prisma.AchievementCreateInput,
  ): Promise<AchievementModel> {
    try {
      return await this.prisma.achievement.create({
        data,
      });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findAll(): Promise<AchievementModel[]> {
    try {
      return await this.prisma.achievement.findMany();
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async updateOne(params: {
    where: Prisma.AchievementWhereUniqueInput;
    data: Prisma.AchievementUpdateInput;
  }): Promise<AchievementModel> {
    try {
      const { where, data } = params;
      return await this.prisma.achievement.update({
        data,
        where,
      });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async deleteOne(
    where: Prisma.AchievementWhereUniqueInput,
  ): Promise<AchievementModel> {
    try {
      return await this.prisma.achievement.delete({
        where,
      });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }
}

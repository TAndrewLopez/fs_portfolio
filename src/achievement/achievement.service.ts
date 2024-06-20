import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Achievement, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AchievementService {
  constructor(private readonly prisma: DatabaseService) {}

  async findAll(): Promise<Achievement[]> {
    try {
      return this.prisma.achievement.findMany();
    } catch (error) {
      this.handleError(error);
    }
  }

  async createOne(data: Prisma.AchievementCreateInput): Promise<Achievement> {
    try {
      return await this.prisma.achievement.create({
        data,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateOne(params: {
    where: Prisma.AchievementWhereUniqueInput;
    data: Prisma.AchievementUpdateInput;
  }) {
    try {
      const { where, data } = params;
      return await this.prisma.achievement.update({
        data,
        where,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteOne(where: Prisma.AchievementWhereUniqueInput) {
    try {
      return await this.prisma.achievement.delete({
        where,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): void {
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new BadRequestException(
        'Failed validation. Check input data and try again.',
      );
    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          throw new BadRequestException('Duplicate entry.');
        case 'P2025':
          throw new BadRequestException('Record was not found.');
      }
    }

    throw new InternalServerErrorException(
      'Internal Server Error, please try again.',
    );
  }
}

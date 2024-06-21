import { Injectable } from '@nestjs/common';
import { Like as LikeModel, Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Injectable()
export class LikeService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly prismaErrorService: PrismaErrorService,
  ) {}
  async createOne(data: Prisma.LikeCreateInput): Promise<LikeModel> {
    try {
      return await this.prisma.like.create({ data });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findAll(): Promise<LikeModel[]> {
    try {
      return await this.prisma.like.findMany();
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findOne(where: Prisma.LikeWhereUniqueInput): Promise<LikeModel> {
    try {
      return await this.prisma.like.findUnique({ where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async deleteOne(where: Prisma.LikeWhereUniqueInput): Promise<LikeModel> {
    try {
      return await this.prisma.like.delete({ where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }
}

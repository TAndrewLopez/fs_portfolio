import { Injectable } from '@nestjs/common';
import { Comment as CommentModel, Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly prismaErrorService: PrismaErrorService,
  ) {}

  async createOne(data: Prisma.CommentCreateInput) {
    try {
      return await this.prisma.comment.create({ data });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findAll(): Promise<CommentModel[]> {
    try {
      return await this.prisma.comment.findMany();
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async updateOne(params: {
    where: Prisma.CommentWhereUniqueInput;
    data: Prisma.CommentUpdateInput;
  }): Promise<CommentModel> {
    try {
      const { where, data } = params;
      return await this.prisma.comment.update({ data, where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async deleteOne(
    where: Prisma.CommentWhereUniqueInput,
  ): Promise<CommentModel> {
    try {
      return await this.prisma.comment.delete({ where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }
}

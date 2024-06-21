import { Injectable } from '@nestjs/common';
import { Message as MessageModel, Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly prismaErrorService: PrismaErrorService,
  ) {}

  async createOne(data: Prisma.MessageCreateInput): Promise<MessageModel> {
    try {
      return await this.prisma.message.create({ data });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findOne(where: Prisma.MessageWhereUniqueInput): Promise<MessageModel> {
    try {
      return await this.prisma.message.findUnique({ where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findAll(): Promise<MessageModel[]> {
    try {
      return await this.prisma.message.findMany();
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async updateOne(params: {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.MessageUpdateInput;
  }): Promise<MessageModel> {
    try {
      const { where, data } = params;
      return await this.prisma.message.update({
        data,
        where,
      });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async deleteOne(
    where: Prisma.MessageWhereUniqueInput,
  ): Promise<MessageModel> {
    try {
      return await this.prisma.message.delete({ where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma, Project as ProjectModel } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Injectable()
export class ProjectService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly prismaErrorService: PrismaErrorService,
  ) {}

  async createOne(data: Prisma.ProjectCreateInput): Promise<ProjectModel> {
    try {
      return await this.prisma.project.create({ data });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findAll(): Promise<ProjectModel[]> {
    try {
      return await this.prisma.project.findMany();
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  // TODO: UPDATE ERROR HANDLING TO THROW ERROR IF NOT PROJECT IS FOUND.
  async findOne(where: Prisma.ProjectWhereUniqueInput): Promise<ProjectModel> {
    try {
      const project = await this.prisma.project.findUnique({ where });
      return project;
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async updateOne(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<ProjectModel> {
    try {
      const { where, data } = params;
      return await this.prisma.project.update({
        data,
        where,
      });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async deleteOne(where: Prisma.ProjectWhereUniqueInput) {
    try {
      return await this.prisma.project.delete({
        where,
      });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }
}

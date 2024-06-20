import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma, Project as ProjectModel } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: DatabaseService) {}

  async createOne(data: Prisma.ProjectCreateInput): Promise<ProjectModel> {
    try {
      return await this.prisma.project.create({ data });
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(): Promise<ProjectModel[]> {
    try {
      return await this.prisma.project.findMany();
    } catch (error) {
      this.handleError(error);
    }
  }

  // TODO: UPDATE ERROR HANDLING TO THROW ERROR IF NOT PROJECT IS FOUND.
  async findOne(where: Prisma.ProjectWhereUniqueInput): Promise<ProjectModel> {
    try {
      const project = await this.prisma.project.findUnique({ where });
      return project;
    } catch (error) {
      this.handleError(error);
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
      this.handleError(error);
    }
  }

  async deleteOne(where: Prisma.ProjectWhereUniqueInput) {
    try {
      return await this.prisma.project.delete({
        where,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any): void {
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
        default:
          throw new BadRequestException(`Database error: ${error.message}`);
      }
    }
    console.log(error);
    throw new InternalServerErrorException(
      'Internal Server Error, please try again.',
    );
  }
}

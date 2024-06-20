import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Project as ProjectModel } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async createOne(
    @Body(ValidationPipe) createProjectDto: CreateProjectDto,
  ): Promise<ProjectModel> {
    return this.projectService.createOne(createProjectDto);
  }

  @Get()
  async findAll(): Promise<ProjectModel[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProjectModel> {
    return this.projectService.findOne({ id });
  }

  @Patch(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectModel> {
    return this.projectService.updateOne({
      where: { id },
      data: { ...updateProjectDto },
    });
  }

  @Delete(':id')
  async deleteOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProjectModel> {
    return this.projectService.deleteOne({ id });
  }
}

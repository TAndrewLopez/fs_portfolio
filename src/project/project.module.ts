import { Module } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [DatabaseService, PrismaErrorService, ProjectService],
})
export class ProjectModule {}

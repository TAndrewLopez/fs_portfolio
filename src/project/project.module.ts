import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { DatabaseService } from 'src/database/database.service';
import { LoggerMiddleware } from 'src/utils/loggerMiddleware/logger.middleware';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Module({
  controllers: [ProjectController],
  providers: [DatabaseService, PrismaErrorService, ProjectService],
})
export class ProjectModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProjectController);
  }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { DatabaseService } from 'src/database/database.service';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, DatabaseService],
})
export class ProjectModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProjectController);
  }
}

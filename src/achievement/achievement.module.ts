import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { LoggerMiddleware } from 'src/utils/loggerMiddleware/logger.middleware';
import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService, DatabaseService, PrismaErrorService],
})
export class AchievementModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AchievementController);
  }
}

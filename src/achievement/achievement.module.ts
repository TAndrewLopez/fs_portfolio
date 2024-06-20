import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService, DatabaseService],
})
export class AchievementModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AchievementController);
  }
}

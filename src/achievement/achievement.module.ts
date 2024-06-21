import { Module } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';

@Module({
  controllers: [AchievementController],
  providers: [AchievementService, DatabaseService, PrismaErrorService],
})
export class AchievementModule {}

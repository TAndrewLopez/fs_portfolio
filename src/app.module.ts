import { Module } from '@nestjs/common';
import { AchievementModule } from './achievement/achievement.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AchievementModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

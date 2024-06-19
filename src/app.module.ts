import { Module } from '@nestjs/common';
import { AchievementModule } from './achievement/achievement.module';

@Module({
  imports: [AchievementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

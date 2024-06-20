import { Module } from '@nestjs/common';
import { AchievementModule } from './achievement/achievement.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AchievementModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

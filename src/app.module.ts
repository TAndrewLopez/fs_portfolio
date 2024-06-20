import { Module } from '@nestjs/common';
import { AchievementModule } from './achievement/achievement.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [AchievementModule, DatabaseModule, AuthModule, ProjectModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

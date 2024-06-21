import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AchievementModule } from './achievement/achievement.module';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';
import { MessageModule } from './message/message.module';
import { LoggerMiddleware } from './utils/loggerMiddleware/logger.middleware';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    AchievementModule,
    DatabaseModule,
    ProjectModule,
    MessageModule,
    UserModule,
    AuthModule,
    CommentModule,
    LikeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('achievement', 'message', 'project');
  }
}

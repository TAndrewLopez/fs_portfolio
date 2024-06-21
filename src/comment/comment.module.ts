import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, DatabaseService, PrismaErrorService],
})
export class CommentModule {}

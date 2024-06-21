import { Module } from '@nestjs/common';

import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [LikeController],
  providers: [DatabaseService, LikeService, PrismaErrorService],
})
export class LikeModule {}

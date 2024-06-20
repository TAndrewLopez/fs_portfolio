import { Module } from '@nestjs/common';

import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Module({
  controllers: [MessageController],
  providers: [DatabaseService, MessageService, PrismaErrorService],
})
export class MessageModule {}

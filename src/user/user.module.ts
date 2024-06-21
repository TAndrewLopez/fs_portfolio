import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Module({
  controllers: [UserController],
  providers: [DatabaseService, PrismaErrorService, UserService],
})
export class UserModule {}
